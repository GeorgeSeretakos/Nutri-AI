"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@lib/locale";

export default function UnauthorizedRedirect({
                                               exp = null,            // UNIX seconds; if provided, schedule redirect at exp
                                               immediate = true,      // if true (default) or no exp -> redirect now
                                               message,               // optional override; if omitted we use a locale default
                                               redirectTo = "/login", // where to send the user
                                             }) {
  const router = useRouter();
  const locale = useLocale();

  const DEFAULTS = {
    el: "Η συνεδρία σας έληξε ή δεν έχετε πρόσβαση σε αυτή τη σελίδα. Παρακαλώ συνδεθείτε.",
    en: "Your session expired or you don’t have access to this page. Please sign in.",
  };

  // Use explicit message if provided; otherwise pick by locale (fallback: el)
  const notice = typeof message === "string" ? message : (DEFAULTS[locale] || DEFAULTS.el);

  useEffect(() => {
    const redirect = () => {
      try { sessionStorage.setItem("authNotice", notice); } catch {}
      router.replace(redirectTo);
    };

    // Immediate redirect (unauthorized case)
    if (immediate || !exp) {
      redirect();
      return;
    }

    // Scheduled redirect at token expiry (authorized-but-watching case)
    const msLeft = exp * 1000 - Date.now();
    if (msLeft <= 0) { redirect(); return; }

    const timer = setTimeout(redirect, msLeft);

    // Also check on focus/visibility in case the tab was sleeping
    const onWake = () => { if (Date.now() >= exp * 1000) redirect(); };
    window.addEventListener("focus", onWake);
    document.addEventListener("visibilitychange", onWake);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", onWake);
      document.removeEventListener("visibilitychange", onWake);
    };
  }, [exp, immediate, notice, router, redirectTo]);

  return null;
}
