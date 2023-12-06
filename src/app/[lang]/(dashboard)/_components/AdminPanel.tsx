"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/icons";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

function AdminPanel({ className }: SidebarProps) {
  const router = useRouter();

  const path = usePathname();

  return (
    <div className={cn("pb-12 bg-slate-950", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg text-white font-semibold tracking-tight">
            school managment 🚀
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => router.push("/admin")}
              variant={
                path === "/dashboard" ? "darkGhostSelected" : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Home
            </Button>
            <Button
              onClick={() => router.push("/orders")}
              variant={
                path === "/dashboard/teachers"
                  ? "darkGhostSelected"
                  : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Teachers
            </Button>
            <Button
              onClick={() => router.push("/customers")}
              variant={
                path === "/dashboard/courses"
                  ? "darkGhostSelected"
                  : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Courses
            </Button>
            <Button
              onClick={() => router.push("/customers")}
              variant={
                path === "/dashboard/students"
                  ? "darkGhostSelected"
                  : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Students
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-white text-lg font-semibold tracking-tight">
            website ✨
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => router.push("/products")}
              variant={
                path === "/dashboard/blog" ? "darkGhostSelected" : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Blog
            </Button>
            <Button
              onClick={() => router.push("/editor")}
              variant={
                path === "/dashboard/settings"
                  ? "darkGhostSelected"
                  : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.calendar className="w-4 h-4 mr-2 " />
              Settings
            </Button>
            <Button
              onClick={() => router.push("/analitycs")}
              variant={
                path === "/dashboard/analitycs"
                  ? "darkGhostSelected"
                  : "darkGhost"
              }
              className="w-full justify-start"
            >
              <Icons.chart className="w-4 h-4 mr-2 " />
              Analitycs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
