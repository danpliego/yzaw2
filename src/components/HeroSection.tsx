import React from 'react';
import svgPaths from "../imports/svg-i5j72c1lrg";
import img042A46753 from "figma:asset/2d7f5935134cf3a41c122732668c1a6af0ac0de4.png";
import { img042A46754 } from "../imports/svg-aeuxz";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  authorNames: string;
  authorDescription: string;
  backgroundColor?: string;
}

function AvatarPMs() {
  return (
    <div
      className="mr-[-16px] relative shrink-0 size-20"
      data-name="Avatar PMs"
    >
      <div
        className="absolute aspect-[1365/2048] bg-center bg-cover bg-no-repeat left-[-2.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.133px_7.2px] mask-size-[80px_80px] right-[-1%] top-[-7.2px]"
        data-name="042A4675 (3)"
        style={{
          backgroundImage: `url('${img042A46753}')`,
          maskImage: `url('${img042A46754}')`,
        }}
      />
    </div>
  );
}

function Avatars() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-4 py-0 relative shadow-[0px_4px_6px_0px_rgba(0,0,0,0.07)] shrink-0"
      data-name="avatars"
    >
      <AvatarPMs />
    </div>
  );
}

function Content({ authorNames, authorDescription }: { authorNames: string; authorDescription: string }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#37372f] text-left"
      data-name="content"
    >
      <div
        className="font-medium relative shrink-0 text-[22px] w-full m-0"
      >
        <p className="block leading-[1.2] m-0">{authorNames}</p>
      </div>
      <div
        className="font-normal relative shrink-0 text-[18px] tracking-[0.18px] w-full m-0"
      >
        <p className="block leading-[1.4] m-0">
          {authorDescription}
        </p>
      </div>
    </div>
  );
}

function Writers({ authorNames, authorDescription }: { authorNames: string; authorDescription: string }) {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-[16px] relative rounded-lg shrink-0 w-full max-w-[673px]"
      data-name="Writers"
    >
      <Avatars />
      <Content authorNames={authorNames} authorDescription={authorDescription} />
    </div>
  );
}

function RightContent({ description, authorNames, authorDescription }: { 
  description: string; 
  authorNames: string; 
  authorDescription: string; 
}) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-10 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="rightContent"
    >
      <div
        className="font-normal leading-[0] min-w-full relative shrink-0 text-[#37372f] text-[18px] text-left tracking-[0.18px] m-0"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4] m-0">
          {description}
        </p>
      </div>
      <Writers authorNames={authorNames} authorDescription={authorDescription} />
    </div>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="title"
    >
      <div className="leading-[0] not-italic relative shrink-0 text-[#3b482f] text-[72px] text-left text-nowrap font-normal m-0">
        <p className="block leading-[1.2] whitespace-pre m-0">{title}</p>
      </div>
    </div>
  );
}

function HeroText({ 
  title, 
  description, 
  authorNames, 
  authorDescription 
}: { 
  title: string; 
  description: string; 
  authorNames: string; 
  authorDescription: string; 
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col md:flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="heroText"
    >
      <Title title={title} />
      <RightContent 
        description={description} 
        authorNames={authorNames} 
        authorDescription={authorDescription} 
      />
    </div>
  );
}

function Shield() {
  return (
    <div className="relative size-[96.947px]" data-name="shield">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 97 97"
      >
        <g id="Group 6100">
          <path
            d={svgPaths.p22bcdf80}
            fill="var(--fill-0, #E1ED9C)"
            id="Vector"
          />
          <g id="Group 6099">
            <path
              d={svgPaths.p201cf280}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p10dfa200}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p26cab700}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p20851280}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p2be58300}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_6"
            />
            <path
              d={svgPaths.p696c800}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_7"
            />
            <path
              d={svgPaths.pc5be700}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_8"
            />
          </g>
          <g id="BEST OF 2025">
            <path
              d={svgPaths.p3ef15500}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p2a00a500}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_10"
            />
            <path
              d={svgPaths.pfabf100}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_11"
            />
            <path
              d={svgPaths.p379d0a80}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_12"
            />
            <path
              d={svgPaths.pd354800}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_13"
            />
            <path
              d={svgPaths.p25b67000}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_14"
            />
            <path
              d={svgPaths.p3e11a900}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_15"
            />
            <path
              d={svgPaths.p3ca3580}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_16"
            />
            <path
              d={svgPaths.p2f977370}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_17"
            />
            <path
              d={svgPaths.p10f57780}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_18"
            />
          </g>
          <g id="Design Award">
            <path
              d={svgPaths.p3eefbf00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_19"
            />
            <path
              d={svgPaths.pe38c0b0}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_20"
            />
            <path
              d={svgPaths.p3a00b500}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_21"
            />
            <path
              d={svgPaths.p28846770}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_22"
            />
            <path
              d={svgPaths.p2e6d8000}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_23"
            />
            <path
              d={svgPaths.p25aa3f00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_24"
            />
            <path
              d={svgPaths.p3053af00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_25"
            />
            <path
              d={svgPaths.p7fd1300}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_26"
            />
            <path
              d={svgPaths.p3606e1f0}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_27"
            />
            <path
              d={svgPaths.p1178ad00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_28"
            />
            <path
              d={svgPaths.p2419f100}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_29"
            />
          </g>
          <g id="Winners">
            <path
              d={svgPaths.p3796f000}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_30"
            />
            <path
              d={svgPaths.p21d73a00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_31"
            />
            <path
              d={svgPaths.p2b540d00}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_32"
            />
            <path
              d={svgPaths.p30f64580}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_33"
            />
            <path
              d={svgPaths.p32b1b880}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_34"
            />
            <path
              d={svgPaths.pa3c3480}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_35"
            />
            <path
              d={svgPaths.p32689900}
              fill="var(--fill-0, #6D6E5E)"
              id="Vector_36"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection({ 
  title = "Yardzen Awards 2025", 
  description = "Discover the year's most exceptional outdoor living products, curated by our design experts and tested by real homeowners.",
  authorNames = "By Tom and Lorem",
  authorDescription = "Lorem and Tom are part of the Award committee, both love to spend a lot of time lorem ipsum dom",
  backgroundColor = "#f3f3ed"
}: HeroSectionProps) {
  return (
    <section 
      className="relative w-full py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor }}
    >
      {/* Background decoration - optional */}
      <div className="absolute top-8 right-8 opacity-20 hidden lg:block">
        <Shield />
      </div>
      
      {/* Main hero content */}
      <div className="max-w-7xl mx-auto">
        <HeroText 
          title={title}
          description={description}
          authorNames={authorNames}
          authorDescription={authorDescription}
        />
      </div>
    </section>
  );
}

export type { HeroSectionProps };