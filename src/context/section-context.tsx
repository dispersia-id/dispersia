'use client';
import React from 'react';

interface SectionContexType {
  activeSection: number;
  setActiveSection: (_: number) => void;
  activeSectionProgress: number;
  setActiveSectionProgress: (_: number) => void;
}

const SectionContext = React.createContext<SectionContexType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function SectionProvider({ children }: Props) {
  const [activeSection, setActiveSection] = React.useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = React.useState(0);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        activeSectionProgress,
        setActiveSectionProgress,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export const useSection = () => {
  const sectionContext = React.useContext(SectionContext);

  if (!sectionContext) {
    throw new Error(
      'useSection has to be used within <SectionContext.Provider>',
    );
  }

  return sectionContext;
};
