// components/home/BlogPreviewSection.jsx
import posts from "../../../../public/data/blog";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import { cookies } from "next/headers";

// Localize using your real structure: post.M[locale]
function localizePost(post, locale) {
  const t =
    post?.M?.[locale] ??               // <- your actual structure
    post?.i18n?.[locale] ??            // optional fallbacks
    post?.translations?.[locale] ??
    post?.[locale] ??
    {};

  return {
    ...post,
    title: t.title ?? post.title,
    excerpt: t.excerpt ?? post.excerpt,
    contentHtml: t.contentHtml ?? post.contentHtml,
    content: t.content ?? post.content,
    externalUrl: t.externalUrl ?? post.externalUrl,
    category: t.category ?? post.category,
  };
}

export default async function BlogPreviewSection() {  // <- async
  const cookieStore = await cookies();                // <- await
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

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

  const blogPosts = posts
    .filter((p) => p.slug)                  // show only slugs in preview
    .map((p) => localizePost(p, locale));   // <- titles now localized

  const categories = [...new Set(blogPosts.map((p) => p.category))];
  const previewPosts = categories
    .map((c) => blogPosts.find((p) => p.category === c))
    .filter(Boolean)
    .slice(0, 3);

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
