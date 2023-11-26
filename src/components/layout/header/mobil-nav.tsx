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
            Abdellah <span className="text-emerald-500">Chehri</span>
          </SheetTitle>
          <SheetDescription>
            here are all my social links below feel free to folow me and contach
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex h-[90%] mt-4 flex-col items-start gap-4 py-4">
          <Link
            href={"/"}
            target="_blank"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Icons.twitter className="w-4 h-4 mr-2 " />
            Twitter
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Icons.gitHub className="w-4 h-4 mr-2 " />
            GitHub
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
