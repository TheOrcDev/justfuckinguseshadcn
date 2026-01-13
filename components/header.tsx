import { ModeSwitcher } from "./mode-switcher";

export function Header() {
  return (
    <header className="mx-auto flex max-w-3xl justify-end p-4">
      <ModeSwitcher />
    </header>
  );
}
