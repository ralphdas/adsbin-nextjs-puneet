import { Button } from "@/components/ui/button";
import { Shield, UserPlus } from "lucide-react";
import TeamDataTable from "./components/TeamDataTable";
import Information from "@/components/Information";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        label={"team"}
        title="DHG & Partners"
        content="Add and manage your team members"
        titleIcon={<Shield size={30} color="#415B41" />}
      >
        <Button className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          Invite new member <UserPlus className="w-4 h-4" />
        </Button>
      </Information>

      <TeamDataTable />
    </>
  );
}
