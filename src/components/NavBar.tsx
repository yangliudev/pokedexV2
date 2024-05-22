"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import Toggle from "./LightDarkToggle/Toggle";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      isBordered
      className="dark dark:bg-black dark:text-white bg-white text-black"
    >
      <NavbarBrand>
        <p className="font-bold">YangDex</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname == "/" ? true : false}>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/pokedex" ? true : false}>
          <Link href="/pokedex" aria-current="page">
            Pokedex
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Etc</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Toggle />
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
