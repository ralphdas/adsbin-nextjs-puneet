import BrochureForm from "./components/BrochureForm";
import InfoHeader from "../../auth/components/InfoHeader";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="BROCHURE"
        title="Brochure"
        content="Order our digital signage-equipped garbage cans quickly and easily. Fill in your information to receive a brochure and we’ll get in touch to assist you. Perfect for high-traffic areas, our cans keep your environment clean and promote your brand."
      />

      <BrochureForm />
    </div>
  );
}
