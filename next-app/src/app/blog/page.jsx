// app/blog/page.jsx
"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@lib/locale";
import posts from "../../../public/data/blog";
import BlogCard from "../components/blog/BlogCard";
import Navbar from "../components/Navbar";

function localizePost(post, locale) {
  const t = post?.M?.[locale] ?? {};
  return {
    ...post,
    // Prefer localized fields when available
    title: t.title ?? post.title,
    contentHtml: t.contentHtml ?? post.contentHtml,
    content: t.content ?? post.content,
    externalUrl: t.externalUrl ?? post.externalUrl,
  };
}

export default function BlogPage() {
  const [category, setCategory] = useState("recipes");
  const locale = useLocale();

  const M = {
    el: {
      tabs: [
        { value: "recipes", label: "Συνταγές" },
        { value: "articles", label: "Αρθρογραφία" },
        { value: "media", label: "Media" },
      ],
    },
    en: {
      tabs: [
        { value: "recipes", label: "Recipes" },
        { value: "articles", label: "Articles" },
        { value: "media", label: "Media" },
      ],
    },
  };
  const T = M[locale] || M.el;

  const filteredPosts = useMemo(
    () =>
      posts
        .filter((p) => p.category === category)
        .map((p) => localizePost(p, locale)),
    [category, locale]
  );

  return (
    <main className="mt-16">
      <Navbar />

      {/* Tabs */}
      <div className="w-full bg-teal-800 shadow-sm">
        <nav
          className="
            flex
            max-w-7xl
            mx-auto
            gap-4
            p-4
            overflow-x-auto
            scrollbar-hide
          "
          role="tablist"
          aria-label="Blog categories"
        >
          {T.tabs.map((tab) => {
            const selected = category === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setCategory(tab.value)}
                className={`whitespace-nowrap px-3 py-1 border-b-2 transition cursor-pointer ${
                  selected
                    ? "border-yellow-400 text-white font-medium"
                    : "border-transparent hover:border-yellow-400 text-white"
                }`}
                aria-current={selected ? "page" : undefined}
                aria-selected={selected}
                role="tab"
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Grid */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.filter(Boolean).map((post) => (
            <div key={post.slug || post.pdfUrl || post.title}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
