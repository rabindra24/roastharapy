import Achivement from "@/components/Achivement";
import ClientSection from "@/components/ClientSection";
import Form from "@/components/Form";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navbar/>
      <Landing />
      <PartnerSection/>
      <ServicesSection/>
      <PartnerSection/>
      <ClientSection/>
      <Achivement/>
      <Form/>
    </main>
  );
}
