"use client";

import { useEffect, useState } from "react";

const matchDark = "(prefers-color-scheme: dark)";

const useDark = () => {
  const [isDark, setIsDark] = useState<boolean>(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(matchDark);
    const handleChange = ({ matches }: MediaQueryListEvent) => {
      setIsDark(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDark;
};

export default useDark;
