import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import PurchasePersonalInformation from "./PurchasePersonalInformation";
import PurchaseShippingInformation from "./PurchaseShippingInformation";
import PurchaseAdditionalInformation from "./PurchaseAdditionalInformation";
import Link from "next/link";

export default function PurchaseForm() {
  return (
    <>
      <PurchaseOrderDetails />
      <PurchasePersonalInformation />
      <PurchaseShippingInformation />
      <PurchaseAdditionalInformation />

      <div className="flex items-center gap-1.5 md:px-0 px-5">
        <Button
          variant={"outline"}
          className="p-0 border-0 mr-auto !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
        >
          <ArrowLeft color="#000" className="w-5 h-5" /> Go back
        </Button>

        <Button asChild className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          <Link href={'/billing'}>Pay now <ArrowRight className="w-5 h-5" /></Link>
        </Button>
      </div>
    </>
  );
}
