import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import { ToggleTheme } from "@/components/toggleTheme/ToggleTheme";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>
        <div className="flex gap-5">
         
          <ThemeSwitch />
          <ToggleTheme />
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
