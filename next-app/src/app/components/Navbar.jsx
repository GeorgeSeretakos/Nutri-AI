"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@lib/locale";

const M = {
  el: {
    home: "Αρχική Σελίδα",
    about: "Ποιοί Είμαστε",
    services: "Υπηρεσίες",
    office: "Ο Χώρος",
    blog: "Blog",
    contact: "Επικοινωνία",
    login: "Σύνδεση",
    ariaOpen: "Άνοιγμα μενού",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    office: "Office",
    blog: "Blog",
    contact: "Contact",
    login: "Login",
    ariaOpen: "Open menu",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const T = M[locale];

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function setLocale(next) {
    document.cookie = `locale=${next}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    router.refresh();
  }

  return (
    <nav className="bg-white text-black shadow right-0 z-50 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* make this relative so we can absolutely-center the mobile wordmark */}
        <div className="relative flex justify-between items-center h-20 sm:h-16 lg:h-18">
          {/* Logo (symbol) */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <img
                src="/icons/logo.jpg"
                alt="Believe in Yourself - Σήμα"
                className="h-20 sm:h-16 lg:h-18 p-2 w-auto object-contain"
              />
              {/* Desktop wordmark (unchanged) */}
              <img
                src="/icons/Believe-in-Yourself-2.png"
                alt="Believe in Yourself"
                className="hidden sm:block h-10 lg:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile wordmark — centered horizontally */}
          <Link
            href="/"
            className="sm:hidden absolute left-1/2 -translate-x-1/2"
            aria-label={T.home}
          >
            <img
              src="/icons/Believe-in-Yourself-2.png"
              alt="Believe in Yourself"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-4 lg:space-x-5 items-center font-semibold text-xs lg:text-sm">
            <NavItem href="/" label={T.home} />
            <NavItem href="/about-us/" label={T.about} />
            <NavItem href="/services/" label={T.services} />
            <NavItem href="/office/" label={T.office} />
            <NavItem href="/blog/" label={T.blog} />
            <NavItem href="/contact/" label={T.contact} />
            <NavItem href="/login/" label={T.login} />

            {/* Language toggle: EL | EN */}
            <LangToggle locale={locale} onSelect={setLocale} />
          </div>

          {/* Mobile Menu Button + mobile toggle */}
          <div className="sm:hidden flex items-center gap-3">
            <LangToggle locale={locale} onSelect={setLocale} compact />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-label={T.ariaOpen}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 px-4 py-4 font-medium">
            <NavItem href="/" label={T.home} />
            <NavItem href="/about-us/" label={T.about} />
            <NavItem href="/office/" label={T.office} />
            <NavItem href="/services/" label={T.services} />
            <NavItem href="/blog/" label={T.blog} />
            <NavItem href="/contact/" label={T.contact} />
            <NavItem href="/login/" label={T.login} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-sm transition whitespace-nowrap ${
        isActive
          ? "text-teal-800 border-b-2 border-teal-800"
          : "hover:text-teal-800 hover:border-b-2 hover:border-teal-800"
      }`}
    >
      {label}
    </Link>
  );
}

/** EL | EN toggle with active bold + inactive grey */
function LangToggle({ locale, onSelect, compact = false }) {
  const base =
    "px-0.5 disabled:cursor-default focus:outline-none focus:ring-0";
  const active = "font-semibold text-black";
  const inactive = "text-gray-400 hover:text-teal-800";

  const size = compact ? "text-xs" : "text-xs lg:text-sm";

  return (
    <div className={`flex items-center ${size}`} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => onSelect("el")}
        disabled={locale === "el"}
        aria-current={locale === "el" ? "true" : undefined}
        className={`${base} ${locale === "el" ? active : inactive}`}
        title="Ελληνικά"
      >
        EL
      </button>
      <span className="mx-1 text-gray-300 select-none">|</span>
      <button
        type="button"
        onClick={() => onSelect("en")}
        disabled={locale === "en"}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${base} ${locale === "en" ? active : inactive}`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
