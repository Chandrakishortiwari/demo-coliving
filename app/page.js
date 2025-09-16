import dynamic from "next/dynamic";
import Script from "next/script";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MeetHomana from '@/components/MeetHomana';
import WhyHomana from '@/components/WhyHomana';
//import MostPopularSpaces from '@/components/MostPopularSpaces';
import TopCities from '@/components/TopCities';
// import CustomerFeedback from '@/components/CustomerFeedback';
import ContactSection from '@/components/ContactSection';
import QueryForm from '@/components/QueryForm';
import Footer from '@/components/Footer';
const CustomerFeedback = dynamic(()=> import("../components/CustomerFeedback"),{ssr:false, loading: () => <p>Loading...</p>,})
const MostPopularSpaces = dynamic(()=> import("../components/MostPopularSpaces"),{ssr:false,loading: () => <p>Loading...</p>,})
export default function Home() {
  return (
    <main className="min-h-screen" id="home">
      <Header />
      <HeroSection />
       
      <div id="about">
        <MeetHomana />
      </div>
      <WhyHomana />
      <MostPopularSpaces />
      <TopCities />
      <CustomerFeedback />
      <ContactSection />
      {/* <QueryForm /> */}
      <Footer />
    </main>
  );
}