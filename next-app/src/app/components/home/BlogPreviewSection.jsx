import posts from "../../../../public/data/blog";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import { cookies } from "next/headers"; // server-side locale read

export default function BlogPreviewSection() {
  const blogPosts = posts.filter((post) => post.slug);
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const previewPosts = categories
    .map((c) => blogPosts.find((p) => p.category === c))
    .filter(Boolean)
    .slice(0, 3);

  // --- Locale detection ---
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  // --- Localized copy ---
  const M = {
    el: {
      title: "Blog",
      desc: `Μοιραζόμαστε συνταγές, συμμετοχές σε άρθρα και περιοδικά, εμφανίσεις σε μέσα, αλλά και στιγμές από την παρουσία μας στα social media — με στόχο πάντα να σε εμπνέουμε να φροντίζεις τον εαυτό σου με απλό και ρεαλιστικό τρόπο.`,
      btn: "Προβολή όλων",
    },
    en: {
      title: "Blog",
      desc: `We share recipes, articles, magazine features, media appearances, and moments from our social presence — always aiming to inspire you to care for yourself in a simple and realistic way.`,
      btn: "View all",
    },
  };
  const L = M[locale];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="title-teal">{L.title}</h2>
      <div className="max-w-2xl mb-8">
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">{L.desc}</p>
        <div className="mt-4">
          <Link href="/blog" className="btn">
            {L.btn}
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
