// import { AuthorInfo } from "./AuthorInfo";
import svgPaths from "../imports/svg-ztc2jx7is5";

export function PageDescription() {
  return (
    <section className="bg-[#ecf4bf] py-16 px-6">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Yardzen Logo */}
        <div className="flex justify-center animate-fade-in-up">
          <div className="w-32 h-16 md:w-40 md:h-20">
            <svg
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 114 53"
            >
              <g>
                <path d={svgPaths.p36d91880} fill="#3B482F" />
                <path d={svgPaths.p238c0180} fill="#3B482F" stroke="#3B482F" strokeWidth="0.190625" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-8 animate-fade-in-up animation-delay-200">
          <div className="text-[#3b482f] max-w-3xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
              The Yardzen Awards are grounded in real-life outdoor living—from modern 
              backyards to sprawling suburban retreats. Our Designer Picks reflect 
              the most specified products by Yardzen's landscape designers, while 
              our Also Great selections highlight innovative, sustainable, and stylish 
              options.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* <AuthorInfo /> */} autor info goes here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}