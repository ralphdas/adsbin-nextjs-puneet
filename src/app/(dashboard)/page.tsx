import Information from "../../components/Information";
import { CalendarDays } from "lucide-react";
import Statistics from "@/components/Statistics";
import PopupControls from "@/components/PopupControls";
import QuickLink from "@/components/QuickLink";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        content="Ready to Transform Your Space and Engage Your Audience?"
        label="DASHBOARD"
        align="top"
        title="Welcome back <strong>Jimmy</strong> 🤚"
      >
        <div className="inline-flex items-center gap-2.5 font-semibold text-adsbin-grey-1000 ml-auto mb-auto">
          <CalendarDays />{" "}
          <span className="text-sm">14 Oktober 2024 14;23</span>
        </div>
      </Information>

      <div className="border-t border-b border-adsbin-grey-100 mt-10 mb-5 pb-5 pt-10 px-5 gap-5">
        <Statistics />
        {/* <Overview /> */}
      </div>

      <div className="mb-5">
        <QuickLink />
      </div>

      <PopupControls title="Stay in Control with your Dashboard" content="Here you can see all your campaigns, statistics, and more." />
    </>
  );
}
