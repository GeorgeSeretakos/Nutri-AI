"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function AuthorizedNavbar({
                                           role,
                                           showLogout = true,
                                           logoutAction = "/api/logout",
                                           hasSidebar = false,
                                           sidebarOpen = true,
                                           onToggleSidebar,
                                         }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale(); // "el" | "en"

  useEffect(() => {
    setMobileOpen(false); // close drawer on route change
  }, [pathname]);

  const L = {
    el: {
      brandAdmin: "Believe in Yourself · Admin Panel",
      brandClient: "Believe in Yourself · Nutrition Portal",
      clients: "Πελάτες",
      logout: "Αποσύνδεση",
      openMenu: "Άνοιγμα μενού",
      closeMenu: "Κλείσιμο μενού",
    },
    en: {
      brandAdmin: "Believe in Yourself · Admin Panel",
      brandClient: "Believe in Yourself · Nutrition Portal",
      clients: "Clients",
      logout: "Log out",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  }[locale] || L.el;

  const items =
    role === "admin"
      ? [{ href: "/admin", label: L.clients }]
      : [];

  const handleSidebarToggle = () => {
    if (hasSidebar && typeof onToggleSidebar === "function") {
      onToggleSidebar(!sidebarOpen);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left: sidebar toggle (desktop) + brand */}
            <div className="flex items-center gap-3">
              {hasSidebar && role === "admin" && (
                <button
                  type="button"
                  onClick={handleSidebarToggle}
                  className="
                    hidden md:inline-flex
                    items-center justify-center
                    w-8 h-8 rounded-full
                    border border-white/20
                    bg-white/10
                    text-white
                    hover:bg-white/20
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                  "
                  aria-label={sidebarOpen ? "Κρύψε sidebar" : "Εμφάνισε sidebar"}
                >
                  <span className="text-lg leading-none">
                    {sidebarOpen ? "⟨" : "⟩"}
                  </span>
                </button>
              )}

              <div
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 -mx-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
              >
                <span className="text-white font-semibold tracking-tight">
                  {role === "admin" ? L.brandAdmin : L.brandClient}
                </span>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex items-center gap-2">
              <LangToggle currentLocale={locale} />

              {items.map((it) => (
                <NavItem key={it.href} href={it.href} label={it.label} />
              ))}

              {showLogout && (
                <form action={logoutAction} method="post">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 hover:cursor-pointer"
                    title={L.logout}
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden md:inline">{L.logout}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Mobile toggle */}
            <div className="sm:hidden flex items-center gap-2">
              <LangToggle currentLocale={locale} size="sm" />

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? L.closeMenu : L.openMenu}
                className="p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden bg-white text-gray-900 border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col px-4 py-3">
              {items.map((it) => (
                <MobileItem key={it.href} href={it.href} label={it.label} />
              ))}

              {showLogout && (
                <form action={logoutAction} method="post" className="mt-1.5">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                               text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    <LogOut className="w-4 h-4" />
                    {L.logout}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to compensate for fixed navbar height */}
      <div className="h-14" aria-hidden="true" />
    </>
  );
}

/* NavItem, MobileItem, LangToggle stay as they were */
function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition",
        "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800",
        isActive ? "bg-white/10 text-white" : "",
      ].join(" ")}
    >
      <span>{label}</span>
      <span
        className={[
          "ml-2 h-[2px] w-0 bg-white/70 rounded-full transition-all duration-200",
          isActive ? "w-4" : "group-hover:w-4",
        ].join(" ")}
      />
    </Link>
  );
}

function MobileItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex items-center justify-between rounded-md px-3 py-2 text-sm transition",
        "hover:bg-gray-100 active:bg-gray-200",
        isActive ? "text-teal-700 font-semibold" : "text-gray-800",
      ].join(" ")}
    >
      <span>{label}</span>
      {isActive && <span className="h-1 w-1 rounded-full bg-teal-600" />}
    </Link>
  );
}

function LangToggle({ currentLocale = "el", size = "md" }) {
  const isGreek = currentLocale === "el";

  const setLocale = (next) => {
    try {
      localStorage.setItem("locale", next);
      document.cookie = `locale=${next};path=/;max-age=31536000`;
    } catch {}
    window.location.reload();
  };

  const base =
    "inline-flex items-center rounded-full border border-white/20 bg-white/10 text-white/90";
  const sizing =
    size === "sm" ? "text-[10px] h-7 px-1" : "text-xs h-8 px-1.5";
  const pill =
    "px-2 py-1 rounded-full transition whitespace-nowrap";
  const active = "bg-white text-black";
  const inactive = "hover:bg-white/20";

  return (
    <div className={`${base} ${sizing}`} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => !isGreek && setLocale("el")}
        className={`${pill} ${isGreek ? active : inactive}`}
        aria-pressed={isGreek}
      >
        EL
      </button>
      <button
        type="button"
        onClick={() => isGreek && setLocale("en")}
        className={`${pill} ${!isGreek ? active : inactive}`}
        aria-pressed={!isGreek}
      >
        EN
      </button>
    </div>
  );
}
