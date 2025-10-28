// src/app/layout.tsx
import {
    Geist,
    Geist_Mono,
    Great_Vibes,
    Manrope,
    Open_Sans,
    Roboto,
} from "next/font/google";
import "./styles/globals.css";
import { cookies } from "next/headers";
import { LocaleProvider } from "@lib/locale";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
});
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://tonia-kaparelioti.gr"),
    title: { default: "Tonia Kaparelioti", template: "%s | Tonia Kaparelioti" },
    description: "...",
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
};

// 👇 make it async so we can use await inside
export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get("locale")?.value;
    const locale =
        cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

    return (
        <html lang={locale}>
        <body
            className={`
          ${manrope.variable} ${openSans.variable} ${roboto.variable}
          ${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}
          antialiased
        `}
        >
        <LocaleProvider locale={locale}>
            <main>{children}</main>
        </LocaleProvider>
        </body>
        </html>
    );
}
