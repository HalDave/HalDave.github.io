import * as React from 'react';

export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = React.useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    React.useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener('change', mqListener);
      return () => darkThemeMq.removeEventListener('change', mqListener);
    }, []);
    return isDarkTheme;
}