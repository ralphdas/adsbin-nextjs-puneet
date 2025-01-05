"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePicker(){
    const [date, setDate] = React.useState<Date>()
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button
                variant={"outline"}
                className={cn(
                    "w-48 h-11 border-border-btn justify-between text-left font-normal",
                    !date && "text-muted-foreground"
                )}
                >
                {date ? format(date, "PPP") : <span className="text-dark">Pick a date</span>}
                <CalendarIcon className="ml-auto h-6 w-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}