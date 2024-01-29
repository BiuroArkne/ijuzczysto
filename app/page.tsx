import SliderComponent from "@/components/SliderComponent";
import PartnerComponent from "@/components/PartnerComponent";
import NewProductComponent from "@/components/NewProductComponent";
import BlogComponent from "@/components/BlogComponent";
import LastProductComponent from "@/components/LastProductComponent";
import BestsellerProductComponent from "@/components/BestsellerProductComponent";

const Index = () => {
  return (
    <>
      <SliderComponent />

      <LastProductComponent />

      <BestsellerProductComponent />

      <NewProductComponent />

      <section className="container mx-auto px-4 mt-10 lg:mt-20">
        <a href="" title="">
          <img className="object-cover rounded-3xl w-full" src="https://arkne.pl/ijuzczysto2/images/banner.png" alt="" />
        </a>
      </section>

      <BlogComponent />

      <PartnerComponent />
    </>
  )
}

export default Index;