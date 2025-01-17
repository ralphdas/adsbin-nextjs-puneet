import { Button } from "@/components/ui/button";
import StepFirst from "./StepFirst";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepSecond from "./StepSecond";
import StepSix from "./StepSix";
import StepThird from "./StepThird";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CampaignSlug() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <StepFirst />
      <StepSecond />
      <StepThird />
      <StepFour />
      <StepFive />
      <StepSix />

      <div className="flex items-center justify-between md:px-0 px-5">
        <Button
          variant={"outline"}
          className="p-0 border-0 anim-pulse !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
        >
          <ArrowLeft color="#000" className="w-5 h-5" /> Go back
        </Button>
        <Button asChild className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          <Link href={'/billing'}>Pay now <ArrowRight className="w-5 h-5" /></Link>
        </Button>
      </div>
    </div>
  );
}
