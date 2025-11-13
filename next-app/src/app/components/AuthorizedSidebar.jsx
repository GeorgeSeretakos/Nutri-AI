"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthorizedSidebar({ role = "admin" }) {
  const pathname = usePathname();

  const items =
    role === "admin"
      ? [
        { href: "/admin", label: "Πελάτες" },
        { href: "/admin/ai-plans", label: "Νέα διατροφή με AI" },
      ]
      : [];

  return (
    <aside
      className="
        hidden md:flex
        fixed
        top-16 left-0
        h-[calc(100vh-4rem)]
        w-56
        bg-black text-white
        flex-col
        z-40
      "
    >
      <div className="h-12 border-b border-white/10 flex items-center px-4">
        <span className="text-xs font-semibold tracking-wide uppercase text-white/70">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1 text-sm overflow-y-auto">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-md px-3 py-2 whitespace-nowrap transition",
                active
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
