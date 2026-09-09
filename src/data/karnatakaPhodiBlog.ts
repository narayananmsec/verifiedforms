const templateLink = (slug: string, label: string) =>
  `<a href="/docs/${slug}" class="text-emerald-700 font-semibold underline underline-offset-2 hover:text-emerald-800">${label}</a>`;

const karnatakaPhodiBlog = {
  slug: 'karnataka-phodi-process-documents-tamil',
  title: 'கர்நாடகாவில் Phodi / Podi செய்வது எப்படி? தேவையான ஆவணங்கள் மற்றும் செயல்முறை',
  description:
    'கர்நாடகாவில் நிலத்தின் Survey Number-ஐ தனித்தனி Hissa / sub-division ஆகப் பிரிக்க வேண்டிய போது Phodi அல்லது Podi செயல்முறை பயன்படுத்தப்படுகிறது. தேவையான ஆவணங்கள், 11E sketch, survey process மற்றும் property document templates பற்றிய எளிய தமிழ் வழிகாட்டி.',
  language: 'ta' as const,
  content: `
    <section>
      <h2>கர்நாடகாவில் Phodi (Podi) என்றால் என்ன?</h2>
      <p>ஒரே Survey Number-ல் பல உரிமையாளர்கள் இருந்தாலும், ஒவ்வொருவருடைய நிலப்பகுதி தனித்தனி எல்லையுடன் revenue மற்றும் survey records-ல் தெளிவாகப் பிரிக்கப்படாமல் இருக்கலாம். அந்த நிலத்தை தனித்தனி sub-division / Hissa ஆக survey செய்து பதிவு செய்வதற்கான செயல்முறையே பொதுவாக <strong>Phodi / Podi</strong> என்று அழைக்கப்படுகிறது.</p>
      <p>உதாரணமாக, ஒரு Survey Number-ன் ஒரு பகுதி ஒருவருக்கும் மற்றொரு பகுதி மற்றொரு உரிமையாளருக்கும் செல்லும் நிலையில், எல்லை மற்றும் extent தெளிவாகப் பதிவு செய்ய Phodi தேவைப்படலாம். இது வெறும் காகிதத்தில் பங்கு பிரிப்பதிலிருந்து வேறுபட்டது.</p>
    </section>

    <section>
      <h2>எப்போது Phodi தேவைப்படலாம்?</h2>
      <ul>
        <li>ஒரு பெரிய Survey Number-ல் ஒரு பகுதியை மட்டும் விற்பனை செய்யும்போது.</li>
        <li>குடும்ப சொத்தை வாரிசுகள் / co-owners இடையே தனித்தனி பகுதிகளாகப் பிரிக்கும்போது.</li>
        <li>Registered Partition, Settlement அல்லது பிற உரிமை மாற்றத்துக்குப் பிறகு தனித்தனி survey sub-division தேவைப்படும் போது.</li>
        <li>ஒரே Survey Number-ல் பல உரிமையாளர்களின் பங்குகள் இருந்தும், தரையில் தனித்தனி boundaries தெளிவாகப் பதிவு செய்ய வேண்டிய போது.</li>
      </ul>
      <p>ஒரு முழு Survey Number-ஐ முழுவதுமாக ஒரே உரிமையாளருக்கு மாற்றுவது போன்ற வழக்குகளில் Phodi தேவைப்படுமா என்பது வழக்கின் தன்மை மற்றும் சம்பந்தப்பட்ட பதிவுகளைப் பொறுத்தது. எனவே உங்கள் Taluk / Survey office-ல் தற்போதைய நடைமுறையை உறுதி செய்வது நல்லது.</p>
    </section>

    <section>
      <h2>Phodi செய்ய பொதுவாக தயாராக வைத்திருக்க வேண்டிய ஆவணங்கள்</h2>
      <ul>
        <li>சமீபத்திய RTC / Pahani நகல்.</li>
        <li>உரிமையை நிரூபிக்கும் Sale Deed, Partition Deed, Gift Deed, Settlement Deed அல்லது பொருந்தும் registered document.</li>
        <li>Mutation Register (MR) / mutation தொடர்பான பதிவு, கிடைப்பின் அடிப்படையில்.</li>
        <li>Survey Number, Hissa / Surnoc, village, hobli மற்றும் taluk விவரங்கள்.</li>
        <li>விண்ணப்பதாரரின் அடையாள ஆவணம்.</li>
        <li>கூட்டு உரிமை அல்லது partition வழக்குகளில் தேவையான consent / supporting documents.</li>
        <li>நீதிமன்ற உத்தரவு அல்லது வாரிசு தொடர்பான ஆவணம் இருந்தால் அதன் நகல்.</li>
        <li>முந்தைய survey sketch / Tippani / Akarbandh போன்ற பதிவுகள் கிடைத்தால் அவற்றின் விவரங்கள்.</li>
      </ul>
      <p>ஆவணங்களின் சரியான பட்டியல் வழக்கின் தன்மை, நிலத்தின் பதிவு நிலை மற்றும் சம்பந்தப்பட்ட அலுவலகத்தின் தேவைக்கு ஏற்ப மாறலாம். விண்ணப்பிப்பதற்கு முன் சம்பந்தப்பட்ட Survey / Revenue office-ல் checklist-ஐ உறுதி செய்யுங்கள்.</p>
    </section>

    <section>
      <h2>Phodi மற்றும் 11E Sketch — இரண்டுக்கும் என்ன தொடர்பு?</h2>
      <p>கர்நாடகா நிலப் பதிவுகளில் ஒரு Survey Number-ன் ஒரு பகுதியை தனியாகக் காட்ட வேண்டிய பரிவர்த்தனைகளில் pre-mutation sketch / 11E sketch முக்கியமான survey record ஆகும். இது proposed subdivision-ன் எல்லை மற்றும் extent-ஐ காட்டும் survey sketch ஆகப் பயன்படுத்தப்படுகிறது.</p>
      <p>குறிப்பாக ஒரு Survey Number-ன் <strong>part extent</strong> தொடர்பான sale, partition அல்லது gift போன்ற பரிவர்த்தனைகளில் 11E / pre-mutation sketch தொடர்பான விதிகள் பொருந்தலாம். அதனால் பத்திரம் தயாரிக்கும் முன்பே survey position மற்றும் sketch requirements-ஐ சரிபார்ப்பது பாதுகாப்பானது.</p>
    </section>

    <section>
      <h2>Phodi செயல்முறை பொதுவாக எப்படி நடக்கும்?</h2>
      <ol>
        <li><strong>ஆவணங்களை சரிபார்க்கவும்:</strong> RTC, title document, mutation records மற்றும் survey details ஒன்றுடன் ஒன்று பொருந்துகிறதா என்று பார்க்கவும்.</li>
        <li><strong>Survey / subdivision application:</strong> சம்பந்தப்பட்ட Karnataka land-record / survey service மூலம் தேவையான விண்ணப்பத்தைச் சமர்ப்பிக்கவும்.</li>
        <li><strong>ஆவணங்கள் மற்றும் கட்டணம்:</strong> தேவையான supporting documents மற்றும் applicable survey fee-ஐ சமர்ப்பிக்கவும்.</li>
        <li><strong>Field measurement:</strong> சம்பந்தப்பட்ட survey process-ல் நிலத்தின் அளவு, எல்லைகள் மற்றும் தேவையான subdivision details சரிபார்க்கப்படலாம்.</li>
        <li><strong>Sketch / subdivision record:</strong> survey முடிவின் அடிப்படையில் பொருந்தும் sketch மற்றும் subdivision records தயாரிக்கப்படலாம்.</li>
        <li><strong>Revenue record update:</strong> தேவையான அடுத்தடுத்த mutation / RTC updates தொடர்புடைய அதிகாரப்பூர்வ செயல்முறையின் படி மேற்கொள்ளப்படும்.</li>
      </ol>
      <p>Online service availability, application route, fees மற்றும் processing time ஆகியவை மாறக்கூடியவை. எனவே பழைய blog அல்லது third-party information-ஐ மட்டும் நம்பாமல் தற்போதைய அதிகாரப்பூர்வ நடைமுறையைச் சரிபார்க்கவும்.</p>
    </section>

    <section>
      <h2>Phodi, Durasti, Hadbast — குழப்ப வேண்டாம்</h2>
      <ul>
        <li><strong>Phodi / Podi:</strong> Survey Number-ஐ sub-division / Hissa ஆகப் பிரிக்கும் survey process.</li>
        <li><strong>Durasti:</strong> ஏற்கனவே உள்ள survey / revenue record-ல் உள்ள தேவையான திருத்தங்களைச் செய்வதற்கான செயல்முறை.</li>
        <li><strong>Hadbast:</strong> நிலத்தின் எல்லைகளை ground-level-ல் demarcate / identify செய்வதுடன் தொடர்புடைய survey work.</li>
      </ul>
      <p>உங்கள் பிரச்சினை “நிலத்தைப் பிரிக்க வேண்டும்” என்பதா, “பதிவில் அளவு தவறாக உள்ளது” என்பதா, அல்லது “எல்லையை தரையில் காட்ட வேண்டும்” என்பதா என்பதை முதலில் தெளிவுபடுத்திக் கொள்ளுங்கள்.</p>
    </section>

    <section>
      <h2>Phodi செய்யும் முன் கவனிக்க வேண்டிய முக்கிய விஷயங்கள்</h2>
      <ul>
        <li>Sale Deed-ல் உள்ள Survey Number, Hissa, extent மற்றும் boundaries survey records-ுடன் பொருந்துகிறதா பார்க்கவும்.</li>
        <li>RTC-ல் உள்ள extent மட்டும் பார்த்து நிலம் தனியாக demarcated ஆகிவிட்டது என்று முடிவு செய்ய வேண்டாம்.</li>
        <li>Joint ownership இருந்தால் அனைத்து உரிமையாளர்களின் title position மற்றும் partition basis-ஐ சரிபார்க்கவும்.</li>
        <li>11E / Phodi sketch, RTC மற்றும் தொடர்புடைய survey records-ல் முரண்பாடு இருந்தால் அதைத் தீர்த்த பிறகு பரிவர்த்தனை செய்வது பாதுகாப்பானது.</li>
        <li>Phodi முடிந்துவிட்டது என்பதால் title automatically clear என்று கருத வேண்டாம். Encumbrance, title chain, litigation மற்றும் பிற legal checks தனியாக தேவைப்படலாம்.</li>
      </ul>
    </section>

    <section>
      <h2>உங்களுக்கு தேவையான Property Document Templates</h2>
      <p>Phodi / partition / property transfer போன்ற சூழ்நிலைகளில் சரியான legal document format தேவைப்படலாம். ServiceLocal-ல் கிடைக்கும் சில templates:</p>
      <ul>
        <li>${templateLink('sale-conveyance-deed', 'Sale / Conveyance Deed template')}</li>
        <li>${templateLink('sale-agreement', 'Sale Agreement template')}</li>
        <li>${templateLink('partition-deed', 'Partition Deed template')}</li>
        <li>${templateLink('release-deed', 'Release Deed template')}</li>
        <li>${templateLink('settlement-deed', 'Settlement Deed template')}</li>
        <li>${templateLink('gift-deed', 'Gift Deed template')}</li>
        <li>${templateLink('rectification-deed', 'Rectification Deed template')}</li>
      </ul>
      <p><strong>குறிப்பு:</strong> இந்த templates பொதுவான document-format தேவைக்காக வழங்கப்படுகின்றன. Karnataka-வில் registration, stamp duty, survey மற்றும் local legal requirements உங்கள் transaction-க்கு ஏற்ப மாறலாம். பயன்படுத்துவதற்கு முன் உங்கள் specific case-க்கு ஏற்றவாறு சட்ட நிபுணரிடம் சரிபார்க்கவும்.</p>
    </section>

    <section>
      <h2>சுருக்கமாக</h2>
      <p>ஒரே Survey Number-ல் உள்ள நிலத்தை தனித்தனி Hissa / sub-division ஆக அதிகாரப்பூர்வமாகப் பிரிக்க வேண்டிய சூழலில் Phodi / Podi முக்கியமான survey process ஆகும். RTC, title deed, mutation records மற்றும் survey documents-ஐ முன்கூட்டியே தயார் செய்து, 11E / sketch தேவையா என்பதை உறுதி செய்து செயல்படுவது நல்லது.</p>
      <p>நிலத்தை வாங்குவது அல்லது விற்பது போன்ற முக்கியமான transaction என்றால், Phodi status மட்டும் அல்லாமல் title documents, encumbrance மற்றும் registration requirements அனைத்தையும் தனித்தனியாக சரிபார்க்கவும்.</p>
    </section>
  `,
};

export default karnatakaPhodiBlog;
