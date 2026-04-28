import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Perspective } from "@/components/site/Perspective";
import { AdvisoryFocus } from "@/components/site/AdvisoryFocus";
import { KeyBelief } from "@/components/site/KeyBelief";
import { WhyItMatters } from "@/components/site/WhyItMatters";
import { Europe } from "@/components/site/Europe";
import { Founder } from "@/components/site/Founder";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Branded Living CE | Residential Advisory & Real Estate Value Creation",
      },
      {
        name: "description",
        content:
          "Strategic residential advisory for branded residences, branded living and premium residential developments across Central Europe.",
      },
      {
        name: "keywords",
        content:
          "branded living, branded residences, residential value creation, premium residential development, real estate advisory, design-led strategy, project positioning, concept coherence, Central European real estate, brand partnerships",
      },
      { property: "og:title", content: "Branded Living CE | Residential Advisory & Real Estate Value Creation" },
      {
        property: "og:description",
        content:
          "Strategic residential advisory for branded residences, branded living and premium residential developments across Central Europe.",
      },
      { property: "og:image", content: "https://brandedlivingce.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:url", content: "https://brandedlivingce.com/" },
      { name: "twitter:title", content: "Branded Living CE | Residential Advisory & Real Estate Value Creation" },
      {
        name: "twitter:description",
        content:
          "Strategic residential advisory for branded residences, branded living and premium residential developments across Central Europe.",
      },
      { name: "twitter:image", content: "https://brandedlivingce.com/og-image.jpg" },
      { rel: "canonical", href: "https://brandedlivingce.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Perspective />
        <Europe />
        <WhyItMatters />
        <KeyBelief />
        <AdvisoryFocus />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
