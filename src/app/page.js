import HeroSection from "@/Components/HeroSection/HeroSection";
import RangeSection from "@/Components/RangeSection/RangeSection";
import PopularCars from "@/Components/PopularCars/PopularCars.jsx";
import RecommendationCarSection from "@/Components/RecommendationCarSection/RecommendationCarSection";


export default function Page() {
  return (
    <div>
      <HeroSection />
      <RangeSection />
      <PopularCars />
      <RecommendationCarSection />
    </div>
  );
}
