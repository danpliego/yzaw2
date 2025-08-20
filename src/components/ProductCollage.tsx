// import imgImgHeroCollage01 from "figma:asset/3d094c137a1360ad56fbe8e366b6c4db98be585c.png";
// import imgImgHeroCollage02 from "figma:asset/e19350e99a1a9e5772ed06359444e17b4c6b0c53.png";
// import imgImgHeroCollage03 from "figma:asset/29f728e099c08109fcea903797a13a93c43757fd.png";
// import imgImgHeroCollage05 from "figma:asset/5d1db9c306985f38705ec2d3cc69160fa00cc0ae.png";
// import imgImgHeroCollage06 from "figma:asset/13c727f83ab6d2660da17fba211362f078445a17.png";
// import imgImgHeroCollage07 from "figma:asset/1ddd90edfb9f6fb6524e70cb78eda3b570d7a78b.png";
// import imgImgHeroCollage08 from "figma:asset/23b0314f4de7dce1bb7461bb568ed723edbbd3aa.png";
// import imgImgHeroCollage09 from "figma:asset/fc1ea0e8a36ed783e6e5f865bf2fc45a102e24a7.png";
// import imgImgHeroCollage11 from "figma:asset/c63f97996dd7f1a4b50846f074931c0bc365c07a.png";
// import imgImage376 from "figma:asset/718225a6f95407ffb4e847fc7417f8fbc550a818.png";

const productImages = [
  {
    // src: imgImgHeroCollage01,
    className: "absolute top-[8%] left-[4%] w-40 h-56 md:w-48 md:h-72 lg:w-56 lg:h-80",
    animation: "animate-float-slow"
  },
  // {
  //   src: imgImgHeroCollage02,
  //   className: "absolute top-[40%] left-[6%] w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60",
  //   animation: "animate-float-medium"
  // },
  // {
  //   src: imgImgHeroCollage03,
  //   className: "absolute top-[34%] right-[6%] w-40 h-50 md:w-44 md:h-56 lg:w-48 lg:h-60",
  //   animation: "animate-float-fast"
  // },
  // {
  //   src: imgImgHeroCollage05,
  //   className: "absolute top-[12%] right-[4%] w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60",
  //   animation: "animate-float-slow"
  // },
  // {
  //   src: imgImgHeroCollage06,
  //   className: "absolute top-[2%] left-[22%] w-36 h-56 md:w-44 md:h-72 lg:w-52 lg:h-80",
  //   animation: "animate-float-medium"
  // },
  // {
  //   src: imgImgHeroCollage07,
  //   className: "absolute bottom-[6%] left-[10%] w-40 h-52 md:w-44 md:h-64 lg:w-48 lg:h-72",
  //   animation: "animate-float-fast"
  // },
  // {
  //   src: imgImgHeroCollage08,
  //   className: "absolute top-[8%] left-[68%] w-28 h-40 md:w-36 md:h-52 lg:w-44 lg:h-60",
  //   animation: "animate-float-slow"
  // },
  // {
  //   src: imgImgHeroCollage09,
  //   className: "absolute bottom-[4%] left-[50%] translate-x-[-50%] w-44 h-56 md:w-48 md:h-60 lg:w-52 lg:h-64",
  //   animation: "animate-float-medium"
  // },
  // {
  //   src: imgImgHeroCollage11,
  //   className: "absolute top-[48%] right-[-4%] w-24 h-20 md:w-32 md:h-28 lg:w-40 lg:h-32",
  //   animation: "animate-float-fast"
  // },
  // {
  //   src: imgImage376,
  //   className: "absolute bottom-[-8%] right-[22%] w-50 h-64 md:w-56 md:h-80 lg:w-68 lg:h-96",
  //   animation: "animate-float-slow"
  // }
];

export function ProductCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {productImages.map((image, index) => (
        <div
          key={index}
          className={`${image.className} ${image.animation} opacity-0 animate-fade-in-up transition-transform duration-300 hover:scale-110 cursor-pointer pointer-events-auto`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationFillMode: 'forwards'
          }}
        >
          <img
            src={image.src}
            alt={`Outdoor product ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}