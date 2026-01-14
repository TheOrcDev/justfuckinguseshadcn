import Link from "next/link";
import { ModeSwitcher } from "./mode-switcher";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl justify-between p-4 px-12">
      <p className="text-muted-foreground text-sm">
        Built by{" "}
        <Link
          className="underline underline-offset-4 hover:text-foreground"
          href="https://orcdev.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          OrcDev
        </Link>{" "}
        with 🪓
      </p>
      <ModeSwitcher />
    </footer>
  );
}
