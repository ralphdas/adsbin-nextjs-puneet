import Information from "@/components/Information";
import { MapPin } from "lucide-react";
import LocationDataTable from "./components/LocationDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <Information
        label={"LOCATIONS"}
        title="Locations"
        content="Register and manage Signage Locations"
        goBack={false}
      >
        <Button
          asChild
          className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none md:w-auto w-full"
        >
          <Link href={"/locations/add"}>
            Register new Location <MapPin size={32} />
          </Link>
        </Button>
      </Information>

      <LocationDataTable />

        <div className={'flex justify-center py-10 px-5'}>
            <Button
                asChild
                className="py-2 anim-pulse px-4 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none w-auto"
            >
                <Link href={"/locations/add"}>
                    Register new Location <MapPin size={32} />
                </Link>
            </Button>
        </div>

        <PopupControls title="Locations Process" content="Here you can register and manage Signage Locations." />
    </>
  );
}
