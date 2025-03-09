"use client"

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration to avoid mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-12 right-0 p-4 z-50">
      <Select value={theme} onValueChange={(val: string) => setTheme(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">다크 모드</SelectItem>
          <SelectItem value="light">라이트 모드</SelectItem>
          <SelectItem value="system">시스템</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}