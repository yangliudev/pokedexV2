"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">YangDex</p>
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
