import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

const CSV_URL =
  'https://raw.githubusercontent.com/narayananmsec/verified-forms/main/AreaName-MinPricesqft-MaxPricesqft-AvgPricesqft-Re.csv';

type AreaRow = {
  areaName: string;
  avgPrice: number;
  rentRange: string;
  growthLevel: string;
  demandLevel: string;
};

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      const nextChar = line[i + 1];
      if (inQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }

  fields.push(current.trim());
  return fields;
}

function parseNumber(raw: string): number {
  const cleaned = raw.replace(/[^\d.]/g, '');
  if (!cleaned) return Number.NaN;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function pickValue(row: Record<string, string>, aliases: string[]): string {
  for (const alias of aliases) {
    const value = row[alias];
    if (value !== undefined && value !== '') return value;
  }
  return '';
}

function parseCSV(text: string): AreaRow[] {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  const headerKeys = parseCSVLine(lines[0]).map(normalizeHeader);
  const rows = lines.slice(1);
  const parsedRows: AreaRow[] = [];

  rows.forEach((line) => {
    const values = parseCSVLine(line);
    const rowMap: Record<string, string> = {};
    headerKeys.forEach((key, index) => {
      rowMap[key] = values[index]?.trim() ?? '';
    });

    const areaName = pickValue(rowMap, ['area', 'areaname', 'location', 'locality', 'name']);
    const avgPriceRaw = pickValue(rowMap, [
      'avgprice',
      'averageprice',
      'pricepersqft',
      'avgpricepersqft',
      'avgpricesqft',
    ]);
    const rentMinRaw = pickValue(rowMap, ['rentmin', 'rentminmonth']);
    const rentMaxRaw = pickValue(rowMap, ['rentmax', 'rentmaxmonth']);
    const rentRangeDirect = pickValue(rowMap, ['rentrange', 'rent', 'avgrent']);
    const rentMin = parseNumber(rentMinRaw);
    const rentMax = parseNumber(rentMaxRaw);
    const rentRange =
      rentRangeDirect ||
      (Number.isFinite(rentMin) && Number.isFinite(rentMax)
        ? `Rs ${rentMin.toLocaleString()} - Rs ${rentMax.toLocaleString()}/month`
        : 'Not specified');
    const growthLevel = pickValue(rowMap, ['growthlevel', 'growth']) || 'Not specified';
    const demandLevel = pickValue(rowMap, ['demandlevel', 'demand']) || 'Not specified';
    const avgPrice = parseNumber(avgPriceRaw);

    if (!areaName || Number.isNaN(avgPrice)) return;
    parsedRows.push({ areaName, avgPrice, rentRange, growthLevel, demandLevel });
  });

  return parsedRows;
}

export default function ChennaiBudgetFinderPage() {
  const [budget, setBudget] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [allAreas, setAllAreas] = useState<AreaRow[]>([]);
  const [matchingAreas, setMatchingAreas] = useState<AreaRow[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [growthFilter, setGrowthFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function loadCSV() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(CSV_URL);
        if (!response.ok) {
          throw new Error(`Failed to load CSV (${response.status})`);
        }
        const csvText = await response.text();
        const parsed = parseCSV(csvText);
        if (parsed.length === 0) {
          throw new Error('CSV loaded but no valid rows were found.');
        }
        setAllAreas(parsed);
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : 'Failed to load Chennai area data.';
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    loadCSV();
  }, []);

  const growthLevels = useMemo(
    () => ['all', ...new Set(allAreas.map((area) => area.growthLevel).filter(Boolean))],
    [allAreas]
  );

  const filteredAndSortedAreas = useMemo(() => {
    const filtered = matchingAreas.filter((area) => {
      const matchesSearch = area.areaName.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const matchesGrowth = growthFilter === 'all' || area.growthLevel === growthFilter;
      return matchesSearch && matchesGrowth;
    });

    filtered.sort((a, b) => (sortOrder === 'asc' ? a.avgPrice - b.avgPrice : b.avgPrice - a.avgPrice));
    return filtered;
  }, [matchingAreas, searchQuery, growthFilter, sortOrder]);

  function handleFindAreas() {
    setSubmitted(true);
    const budgetValue = Number(budget);
    const sizeValue = Number(propertySize);

    if (!Number.isFinite(budgetValue) || !Number.isFinite(sizeValue) || budgetValue <= 0 || sizeValue <= 0) {
      setMatchingAreas([]);
      return;
    }

    const budgetPerSqft = budgetValue / sizeValue;
    setMatchingAreas(allAreas.filter((area) => area.avgPrice <= budgetPerSqft));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-8 md:py-12">
      <Helmet>
        <title>Chennai Property Budget Finder | ServiceLocal</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Chennai Property Budget Finder</h1>
          <p className="mt-2 text-slate-600">
            Enter your budget and property size to discover Chennai areas that match your price per sqft.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                Budget (Rs)
              </label>
              <input
                id="budget"
                type="number"
                min="1"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                placeholder="e.g. 8000000"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="size" className="block text-sm font-medium text-slate-700 mb-1">
                Property Size (sqft)
              </label>
              <input
                id="size"
                type="number"
                min="1"
                value={propertySize}
                onChange={(event) => setPropertySize(event.target.value)}
                placeholder="e.g. 1200"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={handleFindAreas}
                className="w-full md:w-auto px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Find Areas
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 px-4 py-3">
              Failed to load CSV data: {error}
            </div>
          )}

          {!error && !loading && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search area..."
                className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />

              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="asc">Sort Price: Low to High</option>
                <option value="desc">Sort Price: High to Low</option>
              </select>

              <select
                value={growthFilter}
                onChange={(event) => setGrowthFilter(event.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {growthLevels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Growth Levels' : level}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-6">
          {loading ? (
            <div className="text-slate-600">Loading Chennai pricing data...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAndSortedAreas.map((area) => (
                <div key={area.areaName} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-900">{area.areaName}</h2>
                  <p className="mt-2 text-sm text-slate-700">
                    <span className="font-medium">Avg Price:</span> Rs {area.avgPrice.toLocaleString()}/sqft
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Rent Range:</span> {area.rentRange}
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Growth Level:</span> {area.growthLevel}
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Demand Level:</span> {area.demandLevel}
                  </p>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && submitted && filteredAndSortedAreas.length === 0 && (
            <div className="mt-4 text-slate-600">No matching areas found</div>
          )}
        </div>
      </div>
    </div>
  );
}
