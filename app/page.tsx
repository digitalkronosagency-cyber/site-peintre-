import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Revalidation périodique pour refléter les photos ajoutées/supprimées
// depuis l'espace admin (en plus du revalidatePath appelé après chaque
// modification, voir app/api/admin/photos/route.ts).
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Portfolio />
        <Process />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
