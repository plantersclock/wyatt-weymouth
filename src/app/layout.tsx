import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { PortfolioProject, ContentfulProject, ContentfulResponse } from "../types/portfolio";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wyattweymouth.com'),
  title: {
    default: "Wyatt Weymouth - Director, Editor & Motion Designer | TV Guide Portfolio",
    template: "%s | Wyatt Weymouth"
  },
  description:
    "Wyatt Weymouth is a filmmaker and editor based in Los Angeles. Credits include The Secrets of Hillsong (FX/Hulu), Living for the Dead (Hulu), Life Upside Down, and Magic City. Professional TV guide-style portfolio showcasing documentary, narrative, and commercial work.",
  keywords: [
    "Wyatt Weymouth",
    "film editor",
    "director",
    "motion designer",
    "documentary editor",
    "Los Angeles filmmaker",
    "The Secrets of Hillsong",
    "Living for the Dead",
    "Life Upside Down",
    "Magic City",
    "post-production",
    "video editor",
    "colorist",
    "VFX artist"
  ],
  authors: [{ name: "Wyatt Weymouth" }],
  creator: "Wyatt Weymouth",
  publisher: "Wyatt Weymouth",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wyattweymouth.com",
    siteName: "Wyatt Weymouth Portfolio",
    title: "Wyatt Weymouth - Director, Editor & Motion Designer",
    description:
      "Professional portfolio of Wyatt Weymouth, Los Angeles-based filmmaker and editor. Credits include The Secrets of Hillsong (FX/Hulu), Living for the Dead (Hulu), Life Upside Down, and Magic City.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wyatt Weymouth - Director, Editor & Motion Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wyatt Weymouth - Director, Editor & Motion Designer",
    description:
      "Los Angeles filmmaker and editor. Credits: The Secrets of Hillsong, Living for the Dead, Life Upside Down, Magic City. Professional portfolio in retro TV Guide style.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "entertainment",
};

async function fetchPortfolioData(): Promise<PortfolioProject[]> {
  try {
    const results = await fetch(
      "https://cdn.contentful.com/spaces/fo9bdlqe9reg/environments/master/entries?access_token=n4z3E5Nr9-DUnwIH2SEiAWeQ6s7C-2eyTEvaCAZQ33g&content_type=tvGuideItems",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!results.ok) {
      console.warn("Failed to fetch portfolio data for structured data");
      return [];
    }

    const portfolio: ContentfulResponse = await results.json();

    if (!portfolio.items || portfolio.items.length === 0) {
      return [];
    }

    return portfolio.items
      .map((project: ContentfulProject) => ({
        ch: Number(project.fields.channel),
        channel: project.fields.channelName,
        title: project.fields.title,
        role: project.fields.role,
        description: project.fields.description,
        size: project.fields.size as 1 | 2 | 3,
        ...(project.fields.videoUrl && { videoUrl: project.fields.videoUrl }),
        ...(project.fields.imageUrl && { imageUrl: project.fields.imageUrl }),
        ...(project.fields.bonusText && {
          bonusText: project.fields.bonusText,
        }),
        ...(project.fields.isRed === true && { color: "red" as const }),
        ...(project.fields.year && { year: project.fields.year }),
      }))
      .sort((a: PortfolioProject, b: PortfolioProject) => a.ch - b.ch);
  } catch (error) {
    console.error("Error fetching portfolio data for structured data:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portfolioData = await fetchPortfolioData();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wyatt Weymouth",
    jobTitle: ["Director", "Editor", "Motion Designer", "Producer"],
    description: "Filmmaker and editor based in Los Angeles specializing in documentaries, narrative features, and motion design",
    url: "https://wyattweymouth.com",
    sameAs: [
      "https://www.imdb.com/name/nm5238994/",
      "https://www.instagram.com/wyattbearp/",
      "https://www.itsnova.com/wyatt13"
    ],
    email: "wyatt.weymouth@gmail.com",
    address: {
      "@type": "Place",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US"
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    },
    knowsAbout: [
      "Film Editing",
      "Motion Design",
      "Documentary Filmmaking",
      "Color Grading",
      "Visual Effects",
      "Post-Production",
      "Directing",
      "Producing"
    ],
    hasCredential: portfolioData.map((project) => ({
      "@type": "CreativeWork" as const,
      name: project.title,
      description: project.role,
      ...(project.year && { datePublished: project.year }),
      ...(project.description && { about: project.description }),
      ...(project.videoUrl && { url: project.videoUrl }),
      ...(project.imageUrl && { image: project.imageUrl }),
    }))
  };

  return (
    <html lang="en">
      <body
        className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
