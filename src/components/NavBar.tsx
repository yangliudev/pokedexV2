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
      // className="dark dark:bg-black dark:text-white bg-white text-black"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
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
