"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-8 sticky top-5 bg-primary-foreground/50 backdrop-blur-sm w-fit mx-auto px-8 rounded-lg py-1 border"
      )}
    >
      <Link href={"/"} passHref>
        <Button variant={"link"} size={"icon"}>
          Home
        </Button>
      </Link>
      {/* about */}
      <Link href={"/about"} passHref>
        <Button variant={"link"} size={"icon"}>
          About
        </Button>
      </Link>
      {/* projects */}
      <Link href={"/portfolio"} passHref>
        <Button variant={"link"} size={"icon"}>
          portfolio
        </Button>
      </Link>
      {/* theme toggler */}
      <ModeToggle />
    </div>
  );
};

export default Navbar;
