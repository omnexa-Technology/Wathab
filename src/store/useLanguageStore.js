import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const storage = {
  getItem: (name) => (typeof window === 'undefined' ? null : localStorage.getItem(name)),
  setItem: (name, value) => { if (typeof window !== 'undefined') localStorage.setItem(name, value); },
  removeItem: (name) => { if (typeof window !== 'undefined') localStorage.removeItem(name); },
};

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'ar',
      setLanguage: (lang) => set({ language: lang === 'ar' || lang === 'en' ? lang : 'ar' }),
      toggleLanguage: () => set((s) => ({ language: s.language === 'ar' ? 'en' : 'ar' })),
    }),
    { name: 'app-language', storage }
  )
);
