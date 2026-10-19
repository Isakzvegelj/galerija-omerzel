'use client'

import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      storageKey="theme"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  )
}

export function useTheme() {
  const { resolvedTheme, setTheme } = useNextTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'
  return {
    theme,
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
  }
}
