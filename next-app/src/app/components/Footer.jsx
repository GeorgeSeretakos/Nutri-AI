import SocialSection from "../components/home/SocialSection";
import { cookies } from "next/headers";

export default function Contact() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      title: "Επικοινώνησε Μαζί μας",
      addressLabel: "Διεύθυνση",
      addressLines: ["Ελαιών 25 και Ρέμβης, Κηφισιά 145 64"],
      phonesLabel: "Τηλέφωνα",
      phones: ["213 0478 022", "6932762720", "6972774734"],
      emailLabel: "Email",
      formLead: "Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου",
      honeypot: "Μην συμπληρώσεις αυτό το πεδίο:",
      placeholders: {
        firstName: "Όνομα",
        lastName: "Επώνυμο",
        phone: "Τηλέφωνο",
        message: "Μήνυμα",
      },
      appointment: "Επικοινωνώ για να κλείσω ραντεβού",
      privacyPrefix: "Αποδέχομαι την",
      privacyLink: "Πολιτική Απορρήτου",
      submit: "Αποστολή",
      footerRights: "Με την επιφύλαξη παντός δικαιώματος.",
      footerPrivacy: "Πολιτική Απορρήτου",
      footerPhone: "2130478022",
      copyright:
        "© 2025 Believe in Yourself. Με την επιφύλαξη παντός δικαιώματος.",
    },
    en: {
      title: "Contact Us",
      addressLabel: "Address",
      addressLines: ["Elaiōn 25 & Remvis, Kifisia 145 64"],
      phonesLabel: "Phones",
      phones: ["213 0478 022", "6932762720", "6972774734"],
      emailLabel: "Email",
      formLead: "Fill out the form and we’ll get back to you",
      honeypot: "Don’t fill this out:",
      placeholders: {
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone",
        message: "Message",
      },
      appointment: "I’m contacting you to book an appointment",
      privacyPrefix: "I accept the",
      privacyLink: "Privacy Policy",
      submit: "Send",
      footerRights: "All rights reserved.",
      footerPrivacy: "Privacy Policy",
      footerPhone: "2130478022",
      copyright:
        "© 2025 Believe in Yourself. All rights reserved.",
    },
  };

  const L = M[locale];

  return (
    <main className="flex flex-col">
      {/* Contact Section */}
      <section className="relative text-white py-12 px-4 min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/office/32.webp')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            {L.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <div className="mb-4">
                <strong>{L.addressLabel}</strong>
                <ul className="list-disc pl-5">
                  {L.addressLines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <strong>{L.phonesLabel}</strong>
                <ul className="list-disc pl-5">
                  {L.phones.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <strong>{L.emailLabel}</strong>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href="mailto:t.believeinyourself@gmail.com"
                      className="text-teal-400 hover:underline"
                    >
                      t.believeinyourself@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:maria.believeinyourself@gmail.com"
                      className="text-teal-400 hover:underline"
                    >
                      maria.believeinyourself@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* Hours (kept commented) */}
              {/*
              <div>
                <strong>{locale === "el" ? "Ώρες Λειτουργίας" : "Opening Hours"}</strong>
                <ul className="list-disc pl-5">
                  <li>{locale === "el" ? "Δευτέρα - Παρασκευή: 09:00 – 21:00" : "Mon - Fri: 09:00 – 21:00"}</li>
                  <li>{locale === "el" ? "Σάββατο: 10:00 - 15.00" : "Saturday: 10:00 - 15:00"}</li>
                  <li>{locale === "el" ? "Κυριακή: Κλειστά" : "Sunday: Closed"}</li>
                </ul>
              </div>
              */}
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <p className="mb-4 font-bold">{L.formLead}</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    {L.honeypot} <input name="bot-field" />
                  </label>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={L.placeholders.firstName}
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-teal-500 text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={L.placeholders.lastName}
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-teal-500 text-white"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder={L.placeholders.phone}
                  required
                  className="w-full p-2 rounded bg-black/30 border border-teal-500 text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder={L.placeholders.message}
                  className="w-full p-2 rounded bg-black/30 border border-teal-500 text-white"
                />

                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="appointment"
                    id="appointment"
                    className="accent-teal-500 scale-125"
                  />
                  <label htmlFor="appointment" className="text-xs">
                    {L.appointment}
                  </label>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      required
                      className="accent-teal-500 scale-110"
                    />
                    {L.privacyPrefix}{" "}
                    <a href="/privacy-policy" className="text-teal-400 hover:underline">
                      {L.privacyLink}
                    </a>
                  </label>
                  <button type="submit" className="btn">
                    {L.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start gap-6 px-4">
          {/* Logo always on top */}
          <div className="w-full flex justify-center">
            <img
              src="/icons/logo.png"
              alt="Believe in Yourself Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Text + Social */}
          <div className="content flex font-bold flex-col items-center gap-3 w-full">
            <p>{L.copyright}</p>

            <div className="flex flex-wrap justify-center gap-2">
              <a href="mailto:t.believeinyourself@gmail.com" className="hover:underline">
                t.believeinyourself@gmail.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a href={`tel:${L.footerPhone}`} className="hover:underline">
                {L.footerPhone}
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="/privacy-policy" className="hover:underline">
                {L.footerPrivacy}
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-2">
              <SocialSection />
            </div>
          </div>
        </div>
      </footer>

      {/* Map Section */}
      <section className="w-full">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1567385292055!2d23.79469867585517!3d38.09001529393853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f0fc0ec198d%3A0xb2392dc40dec8949!2zzpXOu86xzrnPjs69IDI1LCDOms63z4bOuc-DzrnOrCAxNDUgNjQ!5e0!3m2!1sel!2sgr!4v1752897940956!5m2!1sel!2sgr"
            className="rounded-none md:rounded-lg w-full"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />
        </div>
      </section>
    </main>
  );
}
