"use client";

import {
  BookOpenIcon,
  BoxesIcon,
  CircleHelpIcon,
  GitForkIcon,
  RocketIcon,
  SearchIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((currentOpen) => !currentOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const openExternal = (href: string) => {
    setOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Button
        aria-label="Open command menu"
        onClick={() => setOpen(true)}
        size="icon-sm"
        variant="ghost"
      >
        <SearchIcon />
      </Button>
      <CommandDialog
        description="Jump to a section or open a useful shadcn resource."
        onOpenChange={setOpen}
        open={open}
        title="Navigate this site"
      >
        <Command>
          <CommandInput placeholder="Search pages and resources..." />
          <CommandList>
            <CommandEmpty>No matching destination found.</CommandEmpty>
            <CommandGroup heading="On this page">
              <CommandItem onSelect={() => navigate("/#what-is-shadcn")}>
                <BookOpenIcon />
                What is shadcn?
              </CommandItem>
              <CommandItem onSelect={() => navigate("/#why-shadcn")}>
                <CircleHelpIcon />
                Why shadcn works
              </CommandItem>
              <CommandItem onSelect={() => navigate("/#ecosystem")}>
                <BoxesIcon />
                Explore the ecosystem
              </CommandItem>
              <CommandItem onSelect={() => navigate("/#when-to-use")}>
                <RocketIcon />
                When to use shadcn
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Resources">
              <CommandItem
                onSelect={() => openExternal("https://ui.shadcn.com/docs")}
              >
                <BookOpenIcon />
                Open shadcn documentation
              </CommandItem>
              <CommandItem
                onSelect={() =>
                  openExternal(
                    "https://github.com/TheOrcDev/justfuckinguseshadcn"
                  )
                }
              >
                <GitForkIcon />
                Open this project on GitHub
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
