// app/blog/[slug]/page.jsx
import posts from "../../../../public/data/blog";
import Link from "next/link";
import { cookies } from "next/headers";

export default function BlogSlugPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      notFoundTitle: "Το άρθρο δεν βρέθηκε",
      notFoundDesc: "Αυτό το περιεχόμενο είναι διαθέσιμο μόνο ως PDF.",
      instaTagline: "Συνεργατικό περιεχόμενο από την Anna — Annalicious Healthy Bites",
      instaPostCta: "Δες τη δημοσίευση της @annalicious_healthybites για την παραπάνω συνταγή!",
      instaProfileCta: "Δες το προφίλ της Άννας στο Instagram",
      seeMore: "Δες περισσότερα →",
    },
    en: {
      notFoundTitle: "Post not found",
      notFoundDesc: "This content is available only as a PDF.",
      instaTagline: "Collaborative content by Anna — Annalicious Healthy Bites",
      instaPostCta: "See @annalicious_healthybites’ post for the recipe above!",
      instaProfileCta: "Visit Anna’s Instagram profile",
      seeMore: "See more →",
    },
  };
  const L = M[locale];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2>{L.notFoundTitle}</h2>
        <p>{L.notFoundDesc}</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="title-black text-center">{post.title}</h3>

      {post.image && (
        <div className="mb-6">
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {post.contentHtml ? (
        <div className="content blog" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      ) : (
        post.content?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
      )}

      {/* Instagram links (custom layout) */}
      {post.instagramPostUrl && post.instagramProfileUrl && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
          {/* Logo + tagline */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/icons/annaliciouslogo.png"
              alt="Annalicious Healthy Bites"
              width={56}
              height={56}
              className="inline-block w-14 h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-600">{L.instaTagline}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link
              href={post.instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm md:text-base font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-100 transition"
            >
              <span>{L.instaPostCta}</span>
              <span className="ml-4">→</span>
            </Link>

            <Link
              href={post.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm md:text-base font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-100 transition"
            >
              <span>{L.instaProfileCta}</span>
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>
      )}

      {post.externalUrl && (
        <Link
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-teal-800 font-medium hover:underline"
        >
          {L.seeMore}
        </Link>
      )}
    </article>
  );
}
