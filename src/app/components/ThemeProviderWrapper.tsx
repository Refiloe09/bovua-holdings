"use client";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="invisible">{children}</div>;  // Avoid layout shifts
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
