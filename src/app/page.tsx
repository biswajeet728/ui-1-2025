import Banner from "@/components/_banner";
import Company from "@/components/_company";
import Description from "@/components/_description";
import Different from "@/components/_different";
import Discover from "@/components/_discover";
import Experience from "@/components/_experience";
import Faq from "@/components/_faq";
import Features from "@/components/_features";
import Offer from "@/components/_offer";
import OrderBanner from "@/components/_order-banner";
import Success from "@/components/_success";
import Who from "@/components/_who";

export default function Home() {
  return (
    <div className="h-full">
      <Company />
      <Discover />
      <Description />
      <Experience />
      <Different />
      <Who />
      <Success />
      <Features />
      <Offer />
      <Banner />
      <Faq />
      <OrderBanner />
    </div>
  );
}
