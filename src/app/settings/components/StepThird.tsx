import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function StepThird(){
    return(
        <div>
            <StepHeader count={3} title="Notifications"><></></StepHeader>

            <div className="flex flex-col pt-2 pb-5 gap-2.5">
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Email </Label>
                    <Select>
                        <SelectTrigger className="h-11 w-80 text-black !border-border-btn font-outfit font-normal">
                            <SelectValue placeholder="Enable all" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Web Push </Label>
                    <Select>
                        <SelectTrigger className="h-11 w-80 text-black !border-border-btn font-outfit font-normal">
                            <SelectValue placeholder="Enable all" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant={'outline'} className="text-base shadow-formField font-outfit border-border-btn !h-12 font-bold text-green-text-btn">Approve Web Push</Button>
                </div>
            </div>
        </div>
    )
}