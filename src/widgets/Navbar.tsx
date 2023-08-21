"use client"

import Logo from "@/components/ui/Logo";
import Link from "next/link";
import LoginButtons from "./login/LoginButtons";
import Nav from "./nav/Nav";
import { navItems } from "./nav/lib/items";
import useScrollDirection from "@/shared/hooks/useScrollDirection";
import { cn } from "@/shared/helpers/classname";
import useMatchMedia from "@/shared/hooks/useMatchMedia";

const Navbar = () => {
	const scrollDir = useScrollDirection()
	const screen = useMatchMedia('md')

  return (
    <div
      className={cn(
        scrollDir === "down" && screen === 'md' && "translate-y-[-100%]",
        "grid bg-bg1 shadow-sm box-border transition-transform z-10 px-page fixed top-0 bottom-0 left-0 right-0 items-center grid-cols-[1fr_auto_auto] h-nav gap-8 md:grid-cols-3"
      )}
    >
      <Logo />
      <Nav>
        {navItems.map((el) => (
          <Link
            href={""}
            className="px-4 transition hovered:hover:text-primary"
            key={el}
          >
            {el}
          </Link>
        ))}
      </Nav>
      <LoginButtons />
    </div>
  );
};

export default Navbar;
