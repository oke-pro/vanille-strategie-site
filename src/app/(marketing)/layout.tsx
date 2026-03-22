import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ConversionProvider } from "@/components/conversion/conversion-context";
import { ExitIntentPopup } from "@/components/conversion/exit-intent-popup";
import { StickyCTAMobile } from "@/components/conversion/sticky-cta-mobile";
import { SocialProofNotification } from "@/components/conversion/social-proof-notification";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConversionProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyCTAMobile />
      <ExitIntentPopup />
      <SocialProofNotification />
    </ConversionProvider>
  );
}
