"use client";

import Link from "next/link";
import { useLocale } from "@lib/locale";

export default function BlogCard({ post }) {
  if (!post) return null;

  const locale = useLocale();
  const L = {
    el: { viewPdf: "Προβολή PDF →", readMore: "Μάθε περισσότερα →" },
    en: { viewPdf: "View PDF →", readMore: "Read more →" },
  }[locale] || L?.el || { viewPdf: "Προβολή PDF →", readMore: "Μάθε περισσότερα →" };

  const isPdf = Boolean(post.pdfUrl);
  const isSlug = Boolean(post.slug);

  const targetUrl = isPdf ? post.pdfUrl : isSlug ? `/blog/${post.slug}` : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-72">
      {/* Image */}
      <div className="relative w-full h-[55%]">
        <img
          src={post.image || "/logo/4.png"}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h4 className="text-gray-900 font-semibold line-clamp-2">{post.title}</h4>

        {targetUrl && (
          <Link
            href={targetUrl}
            target={isPdf ? "_blank" : "_self"}
            rel={isPdf ? "noopener noreferrer" : undefined}
            className="inline-block mt-auto text-teal-600 font-medium hover:underline"
          >
            {isPdf ? L.viewPdf : L.readMore}
          </Link>
        )}
      </div>
    </div>
  );
}
