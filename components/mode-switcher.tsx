"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";

import { Button } from "@/components/ui/button";

function isEditableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT")
  );
}

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isThemeShortcut =
        event.key.toLowerCase() === "d" &&
        event.shiftKey &&
        (event.metaKey || event.ctrlKey) &&
        !event.altKey;

      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.defaultPrevented || event.repeat || !isThemeShortcut) {
        return;
      }

      event.preventDefault();
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      className="group/toggle size-8 px-0"
      onClick={toggleTheme}
      variant="ghost"
    >
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
