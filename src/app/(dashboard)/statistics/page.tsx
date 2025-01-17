import ViewsQRscans from "./components/ViewsQRscans";
import Campaign from "./components/Campaign";
import Overview from "./components/Overview";
import Information from "@/components/Information";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        content="Here you can view and analyze all your key data insights in one place."
        label="STATISTICS"
        align="top"
        title="Statistics Dashboard"
      />

      <Campaign />

      <div className="mt-5 py-5 grid md:grid-cols-2 grid-cols-1 gap-5">
        <ViewsQRscans />
        <Overview />
      </div>

      <PopupControls title="Your Campaign Statistics" content="Here you can see all your campaign statistics." />
    </>
  );
}
