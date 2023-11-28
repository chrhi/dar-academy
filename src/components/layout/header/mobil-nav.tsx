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

export default function MobileNav() {
  return (
    <Sheet>
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
            here are all my social links below feel free to folow me and contach
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex h-[90%] mt-4 flex-col items-start gap-4 py-4">
          <Link
            key={888}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Accueil
          </Link>
          <Link
            key={898}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            À propos de nous
          </Link>
          <Link
            key={338}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Les Formations
          </Link>

          <Link
            key={98768}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Contactez-nous
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
