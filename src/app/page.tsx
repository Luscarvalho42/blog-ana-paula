import { HeroSection } from "@/layouts/HeroSection";
import { LastPostsSection } from "@/layouts/LastPostsSection";
import { MessageSection } from "@/layouts/MessageSection";
import { ReviewsSection } from "@/layouts/ReviewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastPostsSection />
      <MessageSection />
      {/* <ReviewsSection /> */}
    </>
  );
}
