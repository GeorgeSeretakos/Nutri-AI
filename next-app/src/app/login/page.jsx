// app/login/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@lib/locale";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";

export default function Login() {
  const locale = useLocale();
  const isEn = locale === "en";

  const TXT = {
    el: {
      introTitle: "Είσοδος στην Υπηρεσία",
      introP1: "Είσαι ήδη πελάτης μας;",
      introP2: "Μπες για να δεις την πρόοδό σου και τις ενημερωμένες δίαιτες.",
      introP3: "Βάλε το email και τον κωδικό σου για να συνεχίσεις.",
      heading: "Σύνδεση",
      emailPH: "Email",
      passPH: "Κωδικός",
      acceptPrefix: "Δηλώνω ότι έχω διαβάσει και αποδέχομαι την",
      privacy: "Πολιτική Απορρήτου",
      continue: "Συνέχεια",
      firstTime: "Πρώτη φορά σύνδεση; Ορίστε κωδικό εδώ.",
      errors: {
        mustAccept: "Για να συνεχίσεις, αποδέξου την Πολιτική Απορρήτου.",
        invalidCreds: "Συμπλήρωσε σωστά email και κωδικό.",
        notFound: "Δεν υπάρχει λογαριασμός με αυτό το email.",
        invalidPassword: "Λάθος κωδικός.",
        generic: "Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά.",
        network: "Σφάλμα δικτύου. Δοκίμασε ξανά.",
      },
    },
    en: {
      introTitle: "Sign in to the Service",
      introP1: "Already a client?",
      introP2: "Sign in to see your progress and updated plans.",
      introP3: "Enter your email and password to continue.",
      heading: "Sign in",
      emailPH: "Email",
      passPH: "Password",
      acceptPrefix: "I declare that I have read and accept the",
      privacy: "Privacy Policy",
      continue: "Continue",
      firstTime: "First time here? Set a password.",
      errors: {
        mustAccept: "To continue, please accept the Privacy Policy.",
        invalidCreds: "Please enter a valid email and password.",
        notFound: "No account found with this email.",
        invalidPassword: "Incorrect password.",
        generic: "An error occurred. Please try again.",
        network: "Network error. Please try again.",
      },
    },
  }[locale] || TXT?.el;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  // One-time alert if redirected (session expired / unauthorized)
  const alertedRef = useRef(false);
  useEffect(() => {
    if (alertedRef.current) return;
    alertedRef.current = true;
    try {
      const msg = sessionStorage.getItem("authNotice");
      if (msg) {
        alert(msg);
        sessionStorage.removeItem("authNotice");
      }
    } catch {}
  }, []);

  const handleLogin = async () => {
    setError("");

    if (!accepted) {
      setError(TXT.errors.mustAccept);
      return;
    }

    try {
      const res = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          acceptedPrivacy: accepted,
        }),
      });

      const rid = res.headers.get("X-Request-ID") || "";
      const data = await res.json();

      if (data.status === "success") {
        if (data.role === "ADMIN") {
          window.location.href = "/admin";
        } else if (data.role === "CLIENT") {
          window.location.href = `/client/${data.id}`;
        } else {
          window.location.href = "/";
        }
        return;
      }

      if (data.status === "first_login") {
        window.location.href = `/set-password?email=${encodeURIComponent(email)}`;
        return;
      }

      // Map backend statuses → localized UI
      const map = {
        privacy_not_accepted: TXT.errors.mustAccept,
        invalid_credentials: TXT.errors.invalidCreds,
        not_found: TXT.errors.notFound,
        invalid_password: TXT.errors.invalidPassword,
        error: TXT.errors.generic,
      };

      setError(map[data.status] || TXT.errors.generic);
      if (rid) console.warn(`[login] status=${data.status} requestId=${rid}`);
    } catch {
      setError(TXT.errors.network);
    }
  };

  return (
    <main className="min-h-screen mt-16">
      <Navbar />

      <IntroSection
        image="/images/office/17.webp"
        title={TXT.introTitle}
        paragraph={
          <>
            <p>{TXT.introP1}</p>
            <p>{TXT.introP2}</p>
            <p>{TXT.introP3}</p>
          </>
        }
      />

      <div className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">{TXT.heading}</h2>

        <input
          type="email"
          placeholder={TXT.emailPH}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded
                     focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          autoComplete="username"
        />

        <input
          type="password"
          placeholder={TXT.passPH}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-2 w-full p-2 border border-gray-300 rounded
                     focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          autoComplete="current-password"
        />

        {/* Required acceptance checkbox (like contact form) */}
        <label className="flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            className="mt-1 accent-teal-500"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            required
          />
          <span className="text-sm text-gray-800">
            {TXT.acceptPrefix}{" "}
            <a
              href="/privacy-policy#privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-700 hover:text-teal-900"
            >
              {TXT.privacy}
            </a>
            .
          </span>
        </label>

        <button
          onClick={handleLogin}
          disabled={!accepted}
          className={`w-full text-white py-2 rounded transition ${
            accepted ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          aria-disabled={!accepted}
        >
          {TXT.continue}
        </button>

        {error && (
          <div className="text-center mt-3">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <a href="/set-password" className="block text-center text-teal-700 mt-4 underline hover:text-teal-900">
          {TXT.firstTime}
        </a>
      </div>
    </main>
  );
}
