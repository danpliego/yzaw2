// ProductCollage.tsx
type CollageItem = {
  src: string;
  className: string;
};

const productImages: CollageItem[] = [
  {
    // keep original image-3
    src: "https://images.ctfassets.net/6dgb2p7c933b/1PwzFh5JeGkzBe60ZcG5g9/74bb87f2c431a26954cc32c06b6606bc/image-3.webp?h=500",
    className:
      "absolute top-[8%] left-[4%] w-40 h-56 md:w-48 md:h-72 lg:w-56 lg:h-80",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/5yw1Qj6g4XeWiIBaBpYSUn/e563e4ffaaa2cc56b9c82ef5cb3e3c7b/image-9.webp?h=500",
    className:
      "absolute top-[40%] left-[6%] w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/6hgjiIPGzOJMQ9hZwL0yAW/675dcc1f6575fb6db67d7df75695f3d8/image-8.webp?h=500",
    className:
      "absolute top-[34%] right-[6%] w-40 h-50 md:w-44 md:h-56 lg:w-48 lg:h-60",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/6AEmAnmluky5rIBQqOkkI8/c65e2f8ae379471374c7d89492bb9f87/image-7.webp?h=500",
    className:
      "absolute top-[12%] right-[4%] w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/45yxG3FoCo4KmcSbsnwUjX/84835db21e6abf8f3b983298630cee06/image-4.webp?h=500",
    className:
      "absolute top-[2%] left-[22%] w-36 h-56 md:w-44 md:h-72 lg:w-52 lg:h-80",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/1TccQTfauz0yAnDRzpBFvj/d5a74dd4cb8112e7b3bd68f763b4406d/image-6.webp?h=500",
    className:
      "absolute bottom-[6%] left-[10%] w-40 h-52 md:w-44 md:h-64 lg:w-48 lg:h-72",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/1w1CPu6JLphyjWIcVUHqe2/930e23c5bc979bad47657b59eccf905a/image-5.webp?h=500",
    className:
      "absolute top-[8%] left-[68%] w-28 h-40 md:w-36 md:h-52 lg:w-44 lg:h-60",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/3ArWXvynigBtbBeV0kqyHE/d337ae7f218903a321956abb39b40f95/image-2.webp?h=500",
    className:
      "absolute bottom-[4%] left-[50%] translate-x-[-50%] w-44 h-56 md:w-48 md:h-60 lg:w-52 lg:h-64",
  },
  {
    src: "https://images.ctfassets.net/6dgb2p7c933b/1WRjlND3uQusXIme3mwUOu/d4d5140a7a301ea5f4d1cab07c4881a4/image-1.webp?h=500",
    className:
      "absolute top-[48%] right-[-4%] w-24 h-20 md:w-32 md:h-28 lg:w-40 lg:h-32",
  },
  {
    // reused last new URL as the 10th image
    src: "https://images.ctfassets.net/6dgb2p7c933b/1WRjlND3uQusXIme3mwUOu/d4d5140a7a301ea5f4d1cab07c4881a4/image-1.webp?h=500",
    className:
      "absolute bottom-[-8%] right-[22%] w-[12.5rem] h-64 md:w-56 md:h-80 lg:w-[17rem] lg:h-96",
  },
];

export function ProductCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {productImages.map((image, index) => (
        <div
          key={index}
          className={`${image.className} cursor-pointer pointer-events-auto`}
        >
          <img
            src={image.src}
            alt={`Outdoor product ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
