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
    <div
      className={`${
        theme == "dark"
          ? "dark dark:bg-black dark:text-white"
          : "bg-white text-black"
      }`}
    >
      {" "}
      <Navbar isBordered>
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
          {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
          <Toggle />
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
