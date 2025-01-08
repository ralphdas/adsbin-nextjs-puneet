import DatePicker from "@/components/DatePicker";
import StepHeader from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function StepFive(){
    return(
        <div>
            <StepHeader count={5} title="Set the start and end dates"><></></StepHeader>

            <div className="flex text-body flex-col py-5 mb-5 gap-5 md:px-0 px-5 max-w-xl w-full">
                <p className="tracking-wide text-base">Reserve a certain number of hours of ad display over two weeks, and your ad will be shown multiple times, evenly distributed to maximise visibility.</p>

                <div className="flex items-center md:gap-5 gap-2.5">
                    <Label className="text-nowrap !font-normal min-w-24">Start Date:</Label>
                    <DatePicker />

                    <Label className="text-nowrap !font-normal min-w-24">End Date:</Label>
                    <DatePicker />
                </div>
                <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
                    <Label className="text-nowrap min-w-24">Duration</Label>
                    <Select>
                        <SelectTrigger className="w-32 h-11 text-black">
                            <SelectValue placeholder="8 hours" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-959">per location</p>
                </div>
                <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
                    <Label className="text-nowrap min-w-24">Exposure:</Label>
                    
                    <p className="text-959">+/- 930 views per location</p>
                    <p className="text-959">+/- 13.950 over 15 locations</p>
                </div>
            </div>
        </div>
    )
}