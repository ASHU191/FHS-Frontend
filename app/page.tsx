import Hero from "@/components/hero"
import SolutionsSection from "@/components/solutions-section"
import ProductsSection from "@/components/products-section"
import NewsSection from "@/components/news-section"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <ProductsSection />
      <AboutSection />
      <NewsSection />
    </>
  )
}
