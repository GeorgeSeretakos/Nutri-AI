// app/set-password/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@lib/locale";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";

export default function SetPassword() {
  const locale = useLocale();
  const isEn = locale === "en";
  const SP = useSearchParams();

  const TXT = {
    el: {
      title: "Ορισμός Κωδικού",
      introP1: "Είναι η πρώτη σου σύνδεση;",
      introP2: "Επίλεξε έναν ασφαλή κωδικό για το λογαριασμό σου.",
      heading: "Ορισμός Κωδικού",
      emailPH: "Email",
      passPH: "Νέος Κωδικός",
      confirmPH: "Επιβεβαίωση Κωδικού",
      save: "Αποθήκευση",
      ok: "Ο κωδικός ορίστηκε επιτυχώς. Μπορείς να συνδεθείς τώρα.",
      errors: {
        emailRequired: "Συμπλήρωσε το email σου.",
        mismatch: "Οι κωδικοί δεν ταιριάζουν.",
        notFound: "Δεν υπάρχει χρήστης με αυτό το email.",
        alreadySet: "Ο κωδικός έχει ήδη οριστεί. Δοκίμασε να συνδεθείς.",
        unknown: "Κάτι πήγε στραβά.",
        network: "Σφάλμα δικτύου. Δοκίμασε ξανά.",
      },
    },
    en: {
      title: "Set Password",
      introP1: "Is this your first login?",
      introP2: "Choose a secure password for your account.",
      heading: "Set Password",
      emailPH: "Email",
      passPH: "New Password",
      confirmPH: "Confirm Password",
      save: "Save",
      ok: "Your password has been set successfully. You can sign in now.",
      errors: {
        emailRequired: "Please enter your email.",
        mismatch: "Passwords do not match.",
        notFound: "No user found with this email.",
        alreadySet: "Password is already set. Try signing in.",
        unknown: "Something went wrong.",
        network: "Network error. Please try again.",
      },
    },
  }[locale] || TXT?.el;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Prefill email from ?email=
  useEffect(() => {
    const initialEmail = SP.get("email");
    if (initialEmail) setEmail(initialEmail);
  }, [SP]);

  const handleSetPassword = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError(TXT.errors.emailRequired);
      return;
    }
    if (!password || password !== confirm) {
      setError(TXT.errors.mismatch);
      return;
    }

    try {
      const res = await fetch("/api/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword: password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setSuccess(TXT.ok);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1800);
      } else if (data.status === "not_found") {
        setError(TXT.errors.notFound);
      } else if (data.status === "already_set") {
        setError(TXT.errors.alreadySet);
      } else {
        setError(TXT.errors.unknown);
      }
    } catch {
      setError(TXT.errors.network);
    }
  };

  return (
    <main className="min-h-screen mt-16">
      <Navbar />

      <IntroSection
        image="/images/office/18.webp"
        title={TXT.title}
        paragraph={
          <>
            <p>{TXT.introP1}</p>
            <p>{TXT.introP2}</p>
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
          className="block mb-4 w-full p-2 border border-gray-300 rounded
                     focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          autoComplete="new-password"
        />

        <input
          type="password"
          placeholder={TXT.confirmPH}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded
                     focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          autoComplete="new-password"
        />

        <button
          onClick={handleSetPassword}
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          {TXT.save}
        </button>

        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </div>
    </main>
  );
}
