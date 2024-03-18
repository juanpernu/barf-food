import { SecondaryFeatures } from "@/components/organisms/secondary-features";
import { PrimaryFeatures } from "@/components/organisms/primary-features";
import { CallToAction } from "@/components/molecules/call-to-action";
import { Faqs } from "@/components/organisms/faqs";
import { Hero } from "@/components/molecules/hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Faqs />
    </section>
  );
}
