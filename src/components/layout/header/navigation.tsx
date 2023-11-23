"use client";

import type { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationMenuDemo } from "./services";

interface NavigationAbdullahProps {}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navigation: FC = ({}) => {
  return (
    <div className=" min-w-[700px] w-fit h-[70px] hidden lg:flex items-center gap-x-4 justify-end">
      <Link
        className={cn(buttonVariants({ variant: "link" }), "text-white")}
        href="/"
      >
        Home
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "text-white")}
        href="/"
      >
        About us
      </Link>

      <NavigationMenuDemo />
      <Link
        className={cn(buttonVariants({ variant: "link" }), "text-white")}
        href="/"
      >
        Our work
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "text-white")}
        href="/"
      >
        Contact
      </Link>
      <Button
        variant={"default"}
        className={cn("bg-red-600 text-white font-bold")}
      >
        +1 (410) 457-9993
      </Button>
    </div>
  );
};

export default Navigation;
