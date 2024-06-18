import React, { Suspense, lazy } from "react";
import "./Home.scss";

// Lazy load components
const Slider = lazy(() => import("../Components/Slider/Slider"));
const FeaturedProducts = lazy(() =>
  import("../Components/FeaturedProducts/FeaturedProducts")
);
const Categories = lazy(() => import("../Components/Categories/Categories"));
const AboutSection = lazy(() => import("../Components/About/AboutSection"));

const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<div>Loading Slider...</div>}>
        <Slider />
      </Suspense>
      <Suspense fallback={<div>Loading Featured Products...</div>}>
        <FeaturedProducts type="featured" />
      </Suspense>
      <Suspense fallback={<div>Loading Categories...</div>}>
        <Categories />
      </Suspense>
      <Suspense fallback={<div>Loading About Section...</div>}>
        <AboutSection />
      </Suspense>
    </div>
  );
};

export default Home;
