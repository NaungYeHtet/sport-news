import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import RequestDemoSection from "@/components/RequestDemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <RequestDemoSection />
      </main>
      <Footer />
    </>
  );
}
