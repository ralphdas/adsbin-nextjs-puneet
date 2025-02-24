import Information from "@/components/Information";
import Overview from "@/app/(dashboard)/earnings/components/Overview";
import AdvertiseBreakdown from "@/app/(dashboard)/earnings/components/AdvertiseBreakdown";
import PayoutSchedule from "@/app/(dashboard)/earnings/components/PayoutSchedule";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        label={"Earnings"}
        title="Earnings"
        content="As a location manager, you earn a share of the advertising revenue generated by your signage displays. This page provides insights into your earnings, payment schedule, and how to maximize your revenue."
        titleIcon={''}
      />

        <Overview />

        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5">
            <div className={'lg:col-span-2'}>
                <AdvertiseBreakdown />
            </div>
            <div className={'lg:col-span-3'}>
                <PayoutSchedule />
            </div>
        </div>

        <PopupControls title="Earning Process" content="Here you can earn or reject campaigns." />
    </>
  );
}
