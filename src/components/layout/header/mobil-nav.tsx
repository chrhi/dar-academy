import { Button, buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Icons } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [opne, setOpen] = useState(false);

  return (
    <Sheet open={opne} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Icons.menu className="w-6 h-6 text-black " />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full z-[9999]">
        <SheetHeader>
          <SheetTitle>
            Dar <span className="text-blue-500">Adacemy</span>
          </SheetTitle>
          <SheetDescription>
            Dar Academy Institus de formations
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex h-[90%] mt-4 flex-col items-start gap-4 py-4">
          <Link
            onClick={() => setOpen(false)}
            key={888}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Accueil
          </Link>
          <Link
            onClick={() => setOpen(false)}
            key={898}
            href={"/about-us"}
            className={buttonVariants({ variant: "ghost" })}
          >
            À propos de nous
          </Link>
          <Link
            onClick={() => setOpen(false)}
            key={338}
            href={"/formations"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Les Formations
          </Link>

          <Link
            onClick={() => setOpen(false)}
            key={98768}
            href={"/contact-us"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Contactez-nous
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
