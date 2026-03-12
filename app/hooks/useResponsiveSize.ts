"use client";

import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return "mobile";     
  if (width <= 1024) return "tablet";     
  return "desktop";                      
};

export function useResponsiveSize<T>({
  mobile,
  tablet,
  desktop,
}: {
  mobile: T;
  tablet: T;
  desktop: T;
}) {
  const [value, setValue] = useState<T>(desktop);

  useEffect(() => {
    const update = () => {
      const bp = getBreakpoint(window.innerWidth);

      if (bp === "mobile") setValue(mobile);
      else if (bp === "tablet") setValue(tablet);
      else setValue(desktop);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [mobile, tablet, desktop]);

  return value;
}
