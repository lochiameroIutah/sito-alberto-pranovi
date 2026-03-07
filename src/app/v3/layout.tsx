"use client";

import { useEffect } from "react";

export default function V3Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("v3-brutalist");
    return () => document.documentElement.classList.remove("v3-brutalist");
  }, []);

  return <>{children}</>;
}
