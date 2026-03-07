"use client";

import { useEffect } from "react";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("v2-editorial");
    return () => document.documentElement.classList.remove("v2-editorial");
  }, []);

  return <>{children}</>;
}
