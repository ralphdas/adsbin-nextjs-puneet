"use client";

import { CheckIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export default function PopupControls({title, content}:{title:string, content:string}) {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="fixed sm:right-6 right-4 left-4 sm:left-auto bottom-4 md:bottom-11 shadow-container sm:max-w-96 sm:w-full bg-white z-20">
        <div className="px-5 py-4 flex items-center justify-between text-adsbin-evergreens gap-4 border-b border-adsbin-grey-100">
          <h6 className="tracking-tight font-semibold">
            {title}
          </h6>
          <Button
            size={"icon"}
            variant={"link"}
            className="!h-auto !w-auto"
            onClick={() => setShow(!show)}
          >
            <X />
          </Button>
        </div>
        <div className="py-2.5 px-5 flex flex-col gap-2.5">
          <div className="flex flex-col gap-5 text-adsbin-grey-1000 font-semibold text-sm">
            <p>{content}</p>
          </div>

          <Button className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
            Understood <CheckIcon />
          </Button>

          <div className="flex items-center justify-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="!text-sm text-adsbin-grey-1000 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show me again
            </label>
          </div>
        </div>
      </div>
    )
  );
}
