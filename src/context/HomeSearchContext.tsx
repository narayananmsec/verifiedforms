import { createContext, useContext, useState, type ReactNode } from 'react';

type HomeSearchContextValue = {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
};

const HomeSearchContext = createContext<HomeSearchContextValue | null>(null);

export function HomeSearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <HomeSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </HomeSearchContext.Provider>
  );
}

// Hook is colocated with provider for a tiny search state namespace shared by Header + App.
// eslint-disable-next-line react-refresh/only-export-components
export function useHomeSearch() {
  const ctx = useContext(HomeSearchContext);
  if (!ctx) {
    throw new Error('useHomeSearch must be used within HomeSearchProvider');
  }
  return ctx;
}
