"use client";

import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search, ShoppingBag } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import GoogleMap from "@/components/GoogleMap";
import SelectedLocations from "./SelectedLocations";
import LocationCard from "./LocationCard";
import * as React from "react";
import Preview from "@/app/(dashboard)/campaigns/components/Preview";

export default function StepFour({getPreview}:{getPreview: () => void}) {
  const [showPreview, setShowPreview] = React.useState(false);
  return !showPreview ?  (
    <div className={'-mt-10'}>
      <StepHeader count={4} title="">
        <></>
      </StepHeader>

      <div className="flex items-center flex-wrap sm:gap-2.5 justify-between mb-5 px-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <form action="/" className="relative sm:w-auto w-full">
            <Input
              placeholder="Place search"
              className="rounded-sm shadow-formField text-adsbin-green-300 placeholder:text-adsbin-green-300 font-outfit text-base border-adsbin-grey-200 pr-10 font-normal min-h-10 min-w-72"
            />
            <Button
              variant={"link"}
              className="p-0 absolute top-2 right-0 min-w-12"
            >
              <Search color="#000" size={32} />
            </Button>
          </form>

          <Select>
            <SelectTrigger className="sm:w-40 h-11 text-adsbin-green-300 border-adsbin-grey-200 font-outfit text-base">
              <SelectValue placeholder="Venue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="sm:w-28 h-11 text-adsbin-green-300 border-adsbin-grey-200 font-outfit text-base">
              <SelectValue placeholder="Map" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <p className="px-2.5 text-adsbin-grey-500 sm:mt-0 mt-4">6 Units found</p>
        </div>

        <div className="flex items-center ml-auto gap-2.5 sm:mt-0 -mt-9">
          <Label className="text-nowrap px-5 py-2 font-outfit font-bold">
            15 selected
          </Label>
          <Button
            variant={"outline"}
            className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
          >
            Add All <ArrowRight color="#000" />
          </Button>
        </div>
      </div>

      <div className="px-5">
        <GoogleMap />
      </div>

      <div className="p-5 px-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-7">
        <LocationCard
            onhandle={() => {
              setShowPreview(!showPreview);
              getPreview()
            }}
          active={false}
          icon={<ShoppingBag color="#000" />}
          title="DUBAI MALL"
          content="Dubai Mall is the world’s largest mall, featuring over 1,300 stores, an aquarium, ice rink, and numerous dining options."
        />
        <LocationCard
            onhandle={() => {
              setShowPreview(!showPreview);
              getPreview()
            }}
          active={false}
          icon={<ShoppingBag color="#000" />}
          title="MALL OF THE EMIRATES"
          content="Mall of the Emirates features 560 stores, Ski Dubai, VOX Cinemas, luxury hotels, and diverse dining options, making it a must-visit."
        />
        <LocationCard
            onhandle={() => {
              setShowPreview(!showPreview);
              getPreview()
            }}
          active={true}
          icon={<ShoppingBag color="#000" />}
          title="Ibn Battuta Mall"
          content="Ibn Battuta Mall, the world’s largest themed mall, features 300+ stores, dining, and decor inspired by the explorer’s travels"
        />
        <LocationCard
            onhandle={() => {
              setShowPreview(!showPreview);
              getPreview()
            }}
          active={false}
          icon={<ShoppingBag color="#000" />}
          title="Dubai Marina Mall"
          content="Dubai Marina Mall offers 140 stores, 21 dining options, and a children’s play area, all within 390,000 square feet"
        />
      </div>

      <SelectedLocations />
    </div>
  ) : (
      <div className={'md:px-5'}>
        <Preview getValue={() => {
          setShowPreview(!showPreview);
          getPreview()
        }} />
      </div>
  );
}
