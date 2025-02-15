import { Button } from "@/components/ui/button";
import { Clock3, DollarSign, Eye, Plus, X } from "lucide-react";

export default function LocationCard({
  icon,
  title,
  content,
  active
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  active: boolean;
}) {
  return (
    <div
      className={`border ${
        active ? "border-adsbin-neutral-300" : "border-adsbin-grey-100"
      } p-5 text-adsbin-grey-1000 tracking-wide text-base min-h-52 hover:border-adsbin-evergreens transition-all`}
    >
      <div className="flex items-start justify-between gap-2.5 mb-2.5">
        <h6 className="uppercase font-extrabold text-sm">{title}</h6>
        {icon}
      </div>
      <div className="min-h-32 mb-10">{content}</div>

      <div className="mb-7 flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <Eye size={20} className="text-adsbin-green-400" />{" "}
          <span>High visibility</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock3 size={20} className="text-black" />{" "}
          <span>Medium Exposure Time</span>
        </div>
        <div className="flex items-center gap-2.5">
          <DollarSign size={20} className="text-black" />{" "}
          <span>High Value</span>
        </div>
      </div>

      {active ? (
        <Button
          className="!h-11 anim-pulse border-adsbin-grey-100 font-bold text-base w-full text-black"
          variant={"outline"}
        >
          Remove Location <X />
        </Button>
      ) : (
        <Button
          className="!h-11 anim-pulse border-adsbin-grey-100 font-bold text-base w-full text-black"
          variant={"outline"}
        >
          Add location <Plus />
        </Button>
      )}
    </div>
  );
}
