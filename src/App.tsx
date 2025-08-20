import CategorySection, { type CategorySectionProps, type PrimaryProduct, type SecondaryProduct } from './components/CategorySection';
import { HeroSection } from './components/HeroSection';
import { PageDescription } from './components/PageDescription';

// Base data template for duplication
const baseProducts: PrimaryProduct[] = [
  {
    id: "1",
    title: "6‑Person Cedar Barrel Sauna",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/5tyKyNsi3O6NGdrq2agRSy/9618d741973068134d84cacb31214750/logo-redwood-outdoors.png", // Redwood outdoors brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/4c7WCoDeZdNnXHolnI0oQQ/77f3d333a2ed4181d5fb2342d2b6d29b/6-person-cedar-barrel-sauna.jpg", 
    description: "A circular cedar sauna built to accommodate up to six people, featuring a Harvia heater and spacious interior—bringing spa wellness to the backyard.",
    hasAward: true,
    link: "https://www.redwoodoutdoors.com/products/barrel-sauna-6-person-fsc-100"
  },
  {
    id: "2",
    title: "Tahoe Blue Pool/Hot Tub Combo",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/2EUphPNFDMkK0vLHgkqCDN/09c86d00980ac0f033fc464a51a268bb/logo-pebble-tec.png", // Pebble Tec brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/1QmFp3zAYKVNC2UEHvx4tf/7fc2a01df87ea4d09203ed0e27d18681/tahoe-blue-pool-hot-tub-combo.jpg?h=500",
    description: "A dual-purpose unit that functions as both pool and spa, finished in celestial Tahoe Blue pebble-tec surface—compact, inviting, and relaxing.",
    hasAward: false,
    link: "https://pebbletec.com/medium-blue-water/pebbletec-tahoe-blue/"
  },
  {
    id: "3",
    title: "Max, Blue Lagoon 20′ Rectangle",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6nOcQ83XdXlIP42iJvaMQw/4b52bf9fbc619333afdec93393c723c0/logo-plungie.png", // Plungie brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/26atf2W0xho5x3QAKcfZ8g/a7ca867d2afb84826a1bfc8d5cf94e2b/max-blue-lagoon-20-rectangle.jpg?h=500",
    description: "A sleek plunge‑pool rectangle (20 ft) with smooth lines and bright-blue interior finish—designed for cooling off in minimal space.",
    hasAward: false,
    link: "https://plungie.com/en-us/pools/max"
  },
  {
    id: "4",
    title: "The Honcho Cowboy Pool Package",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/2xsn35KhAkLlMfTBzQryys/ec0e0190012cfa7fb68908d3d7aa5804/logo-cowboy_pools.png", // Cowboy pools brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/riHBBDeNJgyLivWduHkTF/a601f88fc4394ff6e2368757b1cf77b0/the-honcho-cowboy-pool-package.jpg?h=500",
    description: "A signature above-ground pool offering a curated kit of structures and finishes for backyard entertaining and water immersion.",
    hasAward: false,
    link: "https://www.cowboypools.com/products/the-honcho"
  }
];

const baseSecondaryProducts: SecondaryProduct[] = [
  {
    id: "s1",
    title: "Limestone Fiberstone Fountain",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4KLE976PguiMDPNbP9WLX3/585e08201bd59bb4f8d6291c9bfba917/logo-pottery-barn.png",
    image: "https://images.ctfassets.net/6dgb2p7c933b/nPIWwvEVFdwaldtSu8LSB/6ec7773990b5d76bb879d97fc958e3c8/limestone-fiberstone-fountain.jpg",
    description: "A sculptural outdoor fountain crafted from limestone fiberstone—adds soothing water sound and visual elegance.",
    link: "https://www.potterybarn.com/products/fiberstone-fountain/"
  },
  {
    id: "s2",
    title: "Above Ground 13′ × 7′ with Jets",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3TkAeGokSkAgAuY1iwGW0I/29041daf43d1d252e7c0ac7f29e9761c/logo-soakepools.png",
    image: "https://images.ctfassets.net/6dgb2p7c933b/6CqMyoAwuqGaerNNHuuPFQ/ce3de16d8494cef542016b2cdffa873b/above-ground-13x7-with-jets.jpg",
    description: "A luxury above-ground pool with integrated seating and jets—spa-like experience in a smaller footprint.",
    link: "https://www.soakepools.com/plunge-pool"
  },
  {
    id: "s3",
    title: "Sun Lounger in Sunbrella Canvas",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/42vGwqEgal0SINdwrhW2HE/ed97261a57e718c552c1ae942b1cc380/logo-neighbor.png",
    image: "https://images.ctfassets.net/6dgb2p7c933b/4FcPtBQWXnQTNB0xUPm9P9/a43ea5ab1ef1a143387c76708132805c/sun-lounger-in-sunbrella-canvas.jpg",
    description: "A reclining lounge chair featuring FSC-certified teak frame and Sunbrella cushions—ideal for soaking up sun or relaxing poolside.",
    link: "https://neighboroutdoor.sjv.io/rQXV2Q"
  }
];

// Author configurations for each section
const gatherAuthors = [
  {
    name: "Kevin Lenhart",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/6FVmDEN9455vrIJBMECzAm/197dd3a309af21d58bf88acd8f7629ed/Avatar-Kevin.png",
    description: "Kevin Lenhart, Yardzen’s Design Director, received his degree in Landscape Architecture from UC Berkeley. He lives in Texas and is passionate about sustainable design that gets families outside."
  },
];

const cookDineAuthors = [
  {
    name: "Jenn P.",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/6Wuw5ywqY9ht8WpsU19mff/ab3d941fe60824740be498925424a05e/Avatar-Jenny.png",
    description: "Jenn leads operations at Yardzen, and when she's not helping our clients, you can find her hosting at home in Pittsburg, PA."
  },
];

const plantsGardenAuthors = [
  {
    name: "Kendra P.",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/d3paDeICgA7jWqCgSujDL/17ec3ab405574454f94acd4444613ff4/Avatar-Kendra.png",
    description: "Kendra is the VP of Marketing who spends her free time in her edible front yard with her husband, young son, and five chickens."
  },
];

const relaxRejuvenateAuthors = [
  {
    name: "Adam M.",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/1KEeny3cDwLSrhM8SXu6EZ/542cdf29a0b0f0d844b8f7216cc47095/Avatar-Adam.png",
    description: "Adam M., Yardzen's co-founder, is a licensed landscape contractor and an accomplished college swimmer. He's passionate about all things pools and recovery."
  },
];

const learnPlayAuthors = [
  {
    name: "Allison M.",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/48p2W1KR5eFAAwWP3KHxI2/66d547b517fa496a438cc9c17a4998b2/Avatar-Allison.png",
    description: "Yardzen's CEO and co-founder, Allison, is passionate about helping families spend time outside. A mom of two, she's excited about long-lasting products that help kids get off their devices."
  },
];

const buildBestAuthors = [
  {
    name: "Coleman",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/63m1E2P0sRVJDvljNUvVWj/e9e3c292f0fb5b5d262cf8543734accf/Avatar-Coleman.png",
    description: "Coleman is Yardzen's in-house landscape contractor who spent over twenty years in the field in the Bay Area. He knows every landscaping material, and what it costs."
  },
];

const exteriorHomeAuthors = [
  {
    name: "Alicia",
    avatar: "https://images.ctfassets.net/6dgb2p7c933b/6wSth5eX5lmDuMQlxUZQVB/9389e3a8d5257d3785feaec52eb60336/Avatar-Alicia.png",
    description: "Alicia leads Yardzen's product team, and loves all things exterior design. She's lived across the country and experienced many local home styles."
  },
];

// Function to create unique IDs for each section
const createUniqueProducts = (products: PrimaryProduct[], sectionPrefix: string): PrimaryProduct[] => {
  return products.map((product) => ({
    ...product,
    id: `${sectionPrefix}-${product.id}`
  }));
};

const createUniqueSecondaryProducts = (products: SecondaryProduct[], sectionPrefix: string): SecondaryProduct[] => {
  return products.map((product) => ({
    ...product,
    id: `${sectionPrefix}-${product.id}`
  }));
};

// Section 1: Gather - Real Data
const gatherPrimaryProducts: PrimaryProduct[] = [
  {
    id: "gather-1",
    title: "The Sectional in Sunbrella Canvas",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/bnW3KEZhOwQ6PNAd2kjdY/506008ec1aceff8a300b7c63da516fc3/logo-neighbor.png?h=250", // Neighbor brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/4xF0KfM2ie6jgJldTdnOJd/e47d2551be4b857a579a9d65e3a1ade6/the-sectional-in-sunbrella-canvas.jpg?h=500",
    description: "A modular teak‑wood sectional crafted with FSC-certified solid teak frames, water‑resistant polyester rope backs, quick‑dry reticulated foam cushions wrapped in solution‑dyed Sunbrella® fabric. Fade‑ and mildew‑resistant, it offers deep, lounge‑worthy comfort and configurable layouts to suit any outdoor living space.",
    hasAward: true,
    link: "https://www.hineighbor.com/products/teak-outdoor-sectional?variant=39582908153936"
  },
  {
    id: "gather-2",
    title: "Steel Round Fire Bowl",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/5Raszh3LJ5mjtYHEYNNU4J/2a8f132fb4e0641379b642de2764de73/logo_terrain.png?h=250", // Terrain brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/6dmbnYwWwo4jTu4Ozu3kU7/3da31205c9dec676032947c7f000f33e/steel-round-fire-bowl.jpg?h=500",
    description: "Handcrafted from weathering (Corten) steel—a heat‑resistant alloy that patinas into a stable, rust‑like finish when exposed. A minimalist yet durable fire bowl that stands up to elements and weathers with character.",
    hasAward: true,
    link: "https://www.dpbolvw.net/click-100642218-15754153?url=https%3A%2F%2Fwww.shopterrain.com%2Fshop%2Fweathering-steel-round-bowl-fire-pit%3Fcolor%3D000%26size%3DALL%26type%3DSTANDARD&cjsku=79917258"
  },
  {
    id: "gather-3",
    title: "Triby Outdoor Chair",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3n6r4rVUWi8IDMELk9Syr7/6068b98d2cb8c7e66813d90f09cd1dd8/logo-mcgee_co.png?h=250", // McGee & Co brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/3d7ns5Kq3rMeLpuh7uEMfa/52286e2306d3f8801474dcf0d878bf0b/steel-round-fire-bowl-1.jpg?h=500",
    description: "A refined teak lounge chair with a slatted back and broad arms, the Triby combines timeless craftsmanship with laid‑back comfort. Designed with all-weather cushions and a versatile silhouette, it brings McGee & Co.'s signature elevated style to the outdoors.",
    hasAward: true,
    link: "https://www.mcgeeandco.com/collections/all-outdoor/products/triby-outdoor-chair?collection=all-outdoor&variant=39320719196235"
  },
  {
    id: "gather-4",
    title: "All‑Weather Wicker Outdoor Sofa",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/14oMvX2ieY9omX3CGTN76N/b0a4e2275b73b9f186ddf19aadd28453/logo-quince.png?h=250", // Quince brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/4TVkD4rcoHcJ5tzbQfeCVw/e90c3370542cce612918ddd82230957b/all-weather-wicker-outdoor-sofa.jpg?h=500",
    description: "Handwoven from durable, all‑weather resin wicker over a rust‑resistant frame, this sofa blends casual elegance with year‑round durability. Generously cushioned and designed for comfort, it's a versatile piece that transitions seamlessly from sunlit lounging to evening gatherings.",
    hasAward: true,
    link: "https://www.quince.com/home/all-weather-wicker-outdoor-sofa"
  }
];

const gatherSecondaryProducts: SecondaryProduct[] = [
  {
    id: "gather-s1",
    title: "Slope Indoor/Outdoor Lounge Chair",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/I60Xk4qFHbKcLok247jpm/dbe798c2a5809b02493bbcec23088b11/logo-west-elm.png?h=250", // West Elm
    image: "https://images.ctfassets.net/6dgb2p7c933b/bNTrFShLq7jIWAReKCNdV/f39edb0f2744ca1ba9882e91c7b21930/slope-indoor-outdoor-lounge-chair.jpg",
    description: "A sleek lounge chair designed for both covered outdoor use and indoor living, featuring weather-resistant upholstery and slender architectural lines.",
    link: "https://www.westelm.com/products/outdoor-slope-lounge-chair-h5295/"
  },
  {
    id: "gather-s2",
    title: "Outdoor Vista Sofa",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/2271o8xrYcZNWQTy0syoBc/a6a35793284450e944d4e9417d82d86f/logo-jenni-kayne.png?h=250", // Jenni Kayne
    image: "https://images.ctfassets.net/6dgb2p7c933b/1v6bupUEjTpyYmZZqbKGcG/684709c1a53f37854abc6f3f2a82d63e/outdoor-vista-sofa.jpg",
    description: "Sophisticated, clean-lined outdoor sofa with all-weather upholstery and timeless proportions, reflecting a luxurious minimalist approach.",
    link: "https://www.jennikayne.com/products/outdoor-vista-sofa-parchment-latte"
  },
  {
    id: "gather-s3",
    title: "Heated Evia Lounge",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6VHggREkRgAECHZPjryFEH/706a35ddb1bdaf92d8d11e6b62d24e56/logo-galanter-_-jones.png?h=250", // Galanter & Jones
    image: "https://images.ctfassets.net/6dgb2p7c933b/3KocgT6Ol8HpEAOjMNymqh/071f6b19748cc70552b9a3fca52a70ef/heated-evia-lounge.jpg",
    description: "A single-seat outdoor lounge chair featuring integrated heating—combining clean Scandinavian design with enhanced warmth and comfort for cooler evenings.",
    link: "https://galanterandjones.com/products/evia-lounge"
  },
  {
    id: "gather-s4",
    title: "Teak Outdoor Sofa with Armless Chairs, 5‑Seat",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/2YOTmg0TQHBE9yGCRLWFSv/9fa4fa4dc72ad1e2731dc5bc7aa13c30/logo-outer.png", // Outer
    image: "https://images.ctfassets.net/6dgb2p7c933b/6YbDzmnB0A66AfP5JQfWMF/d50644c80bb57a6f2aa52d368ab8492e/teak-outdoor-sofa-with-armless-chairs-5-seat.jpg",
    description: "Handcrafted from natural materials—likely rattan and teak—this chair evokes resort-style ease with a relaxed silhouette and artisanal craftsmanship.",
    link: "https://outer.pxf.io/Vx3Oe3"
  },
  {
    id: "gather-s5",
    title: "Pergola Kit with Wave Shades",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3nEUgkUzRV0W7o01Fcwgn4/04a3fc06be2c9cbba68d2e878e86d77e/logo-toja-grid.png", // Toja Grid
    image: "https://images.ctfassets.net/6dgb2p7c933b/6ASb3XOb5CrlFf5cYKx4pq/3047434e261d6fd8d4f6f53f9b9672c9/pergola-kit-with-wave-shades.jpg",
    description: "A modern, customizable pergola kit complete with adjustable wave-pattern shade elements for flexible sun control and architectural visual interest.",
    link: "https://tojaliving.com/products/wave-shade-top-kit"
  },
  {
    id: "gather-s6",
    title: "Round Sunbrella Patio Umbrella in White Sand",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/DELNQ3vWYrHbJty0ZWYTl/a2c55f55c15a4467a63596a9ef761182/logo-crate_barrel.png", // Crate & Barrel
    image: "https://images.ctfassets.net/6dgb2p7c933b/2tUYntAG2dja0GTuxQk3pV/cb31e617ed942ee2c570d8bdd3744609/round-sunbrella-patio-umbrella-in-white-sand.jpg",
    description: "A modern, customizable pergola kit complete with adjustable wave-pattern shade elements for flexible sun control and architectural visual interest.",
    link: "https://www.crateandbarrel.com/10-round-canvas-white-sunbrella-outdoor-patio-umbrella-with-black-metal-frame/s462566"
  },
];

const gatherData: CategorySectionProps = {
  title: "Gather",
  description: "The best outdoor living spaces create connection—seating that draws people in, a fire pit that keeps the conversation going, and design that makes space for all. These pieces turn your yard into the go-to spot. Explore Design Plans.",
  authors: gatherAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: gatherPrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: gatherSecondaryProducts,
  backgroundColor: "#f3f3ed"
};

// Section 2: Cook & Dine - Real Data
const cookDinePrimaryProducts: PrimaryProduct[] = [
  {
    id: "cookdine-1",
    title: "Ronde Teak Dining Table",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6gTtZ5R05eKhsSPVKgFbeM/eaeef3db56082265e08b920268b3298e/logo-rejuvenation.png", // Rejuvenation brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/473Z74QvfP5VaGDZOLUirv/454960cf261361fd7199733ac7b1f9a1/ronde-teak-dining-table.jpg?h=500",
    description: "A round teak dining table with clean lines and durable construction—beautiful and long-lasting, yet approachable in price.",
    hasAward: true,
    link: "https://www.rejuvenation.com/products/ronde-teak-dining-table/"
  },
  {
    id: "cookdine-2",
    title: "32″ Pro Grill",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3mnhLO7pmOMhN1K0LxLyPf/9bfe353fd692c915f666077933f65cc1/logo-elements.png", // Elements brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/XpECH9one03OPXGh7DHfM/3c99d220e062d7a4f284e6d7b978f1a3/32-pro-grill.jpg?h=500",
    description: "A sleek, professional-grade grill built for outdoor cooking—high heat performance and refined outdoor design.",
    hasAward: false,
    link: "https://elementshome.com/products/pro-32-built-in-grill/"
  },
  {
    id: "cookdine-3",
    title: "Artforms Pre‑Fab Outdoor Kitchen in Scandia Gray",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6bC9EGs6Kmznm0HhJtLv2F/72c4c411a3a3a3207bfe903d76a5bd8a/logo-belgard.png", // Belgard brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/5Hl4DlW3BjsuMMYKamaGbb/2a63bf173c71512fded710534804adda/artforms-pre-fab-outdoor-kitchen-in-scandia-gray.jpg?h=500",
    description: "A ready-to-install outdoor kitchen module in a neutral gray finish—providing built-in grill housing, counter space, and modern aesthetic.",
    hasAward: false,
    link: "https://www.belgard.com/products/panel-systems/artforms/"
  },
  {
    id: "cookdine-4",
    title: "Caractère Round Dining Table",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1rWMVg112KlLzFf1CwJOI7/fda5f3b0ce3fe45cc258ebedb7c22252/logo_fermob.png", // Fermob brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/5l4Kt5zNbD9RcmMs53EL4u/338dddddc29a8ba8ffc279a1f10fcc10/caractere-round-dining-table.jpg?h=500",
    description: "A stylish, painted-metal round dining table from acclaimed French brand Fermob—lightweight, colorful, and designed for outdoor environments.",
    hasAward: false,
    link: "https://www.fermobusa.com/caractere-round-table-50"
  }
];

const cookDineSecondaryProducts: SecondaryProduct[] = [
  {
    id: "cookdine-s1",
    title: "Bordeaux Concrete Top 94″ Table",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4JWGDL6WIdz80CZsOomuQU/0c7f0ec7e2f3f6cdb171cb8298f86c11/logo-terra-outdoor.png", // Terra
    image: "https://images.ctfassets.net/6dgb2p7c933b/1oHj00e54FemUQT9zwiU0E/3aff6a812b9ce2e185712e1a2859f5ae/bordeaux-concrete-top-94-table.jpg",
    description: "A bold dining table with a polished concrete tabletop and sturdy base—industrial yet elegant, built to anchor large gatherings.",
    link: "https://terraoutdoor.com/products/bordeaux-large-table"
  },
  {
    id: "cookdine-s2",
    title: "Terrace Teak Dining Table & Bench",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4Zus53PK0JfLH4Gh6Wdnpr/49399e7e3051fc904373ba195fc270d4/logo-terrain.png", // Terrain
    image: "https://images.ctfassets.net/6dgb2p7c933b/7dVukVtH6FqFNlMAOZ4bbh/4b98921b7ff3561cedb6054345322b04/terrace-teak-dining-table-and-bench.jpg",
    description: "Classic teak dining set with generous dimensions, perfect for relaxed al fresco meals with bench seating appeal.",
    link: "https://www.tkqlhce.com/click-100642218-13379982?url=https%3A%2F%2Fwww.shopterrain.com%2Fproducts%2Fterrace-teak-dining-table%3Fsku%3D65547465&cjsku=611d2523480516001812f329"
  },
  {
    id: "cookdine-s3",
    title: "Karu 12 Pizza Oven",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/vTVSJ6ddciMIJDIR6bfHy/1ac31392463912d168a84d2d41cbd208/logo-ooni.png", // Ooni
    image: "https://images.ctfassets.net/6dgb2p7c933b/5i3SEPwMZwzATtwkxWW1JK/d89471e6f38246bb3aeffcaccbb81477/karu-12-pizza-oven.jpg",
    description: "A compact, portable pizza oven capable of wood-fired cooking up to 950 °F—delivers authentic artisan pizzas at home.",
    link: "https://www.crateandbarrel.com/ooni-koda-12-outdoor-pizza-oven/s196554"
  },
];

const cookDineData: CategorySectionProps = {
  title: "Cook & Dine",
  description: "Open-air meals, made easy. From the perfect grill setup to furniture built for long dinners under the stars, these picks bring beauty and function to the backyard kitchen and dining room.",
  authors: cookDineAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: cookDinePrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: cookDineSecondaryProducts,
  backgroundColor: "#E5E5D5"
};

// Section 3: Plants & Garden - Real Data
const plantsGardenPrimaryProducts: PrimaryProduct[] = [
  {
    id: "plants-1",
    title: "17″ Tall Modular Metal Raised Garden Bed Kit",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3v5CSKx45wb4YUfuSXcT94/4798e25459964908e51367c6edbc1170/logo-vego-garden.png", // Vego brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/3UyRIRrJjHhE9OjOQgQHib/e0267746f7185fb9d7f2026a94b74520/17-tall-modular-metal-raised-garden-bed-kit.jpg?h=500",
    description: "Steel raised-bed kit that snaps together for custom layouts; rust-resistant and ideal for vegetable, herb, or flower gardens in flexible configurations.",
    hasAward: true,
    link: "https://www.vegogarden.com/collections/vego-garden-17-standard-kits/products/9-in-1-modular-raised-garden-bed"
  },
  {
    id: "plants-2",
    title: "Smart Chicken Coop & Steel Run",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/3qdIT34udlEhOIjeLJpGcx/8a68b110aa8646e57cc156ad68da529c/logo-coop.png", // Coop brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/3bBf2kzXwSaHUDBQXel4vc/3c93b6b6e3c3a477e4895df2a25f15ba/smart-chicken-coop-and-steel-run.jpg?h=500",
    description: "A modern, tech‑enhanced backyard chicken coop with automated features and predator-resistant steel run—combines convenience and security for urban chickens.",
    hasAward: false,
    link: "https://app.coop.farm/products/the-smart-coop"
  },
  {
    id: "plants-3",
    title: "Epic Garden Box + Trellis",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/7cYkSJUvrGVHc3wUCB7oge/d1551b53e99184f44a743923aa41c5d9/logo-epic-gardening.png", // Epic brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/5rFFNS51008qSnmsyx9KRA/ef9d2c3f90852e772164276b85841815/epic-garden-box-plus-trellis.jpg?h=500",
    description: "A raised garden planter with integrated trellis—designed for climbing plants or vines—tailored to small-scale, stylish vegetable or flower gardening.",
    hasAward: false,
    link: "https://shop.epicgardening.com/products/epic-garden-box-trellis"
  },
  {
    id: "plants-4",
    title: "Meyer Lemon Tree",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1jYm6WpxBJ9UOJHQXPGebL/b606bfd2de6cb985fe86409c2adce990/logo-the-sill.png", // The Sill brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/1QU9VfyTdO6XKxy0XNK3Jg/760e874d0a1c9c09695b3eeffc19c791/meyer-lemon-tree.jpg?h=500",
    description: "A patio-suitable Meyer lemon tree—compact, fruit-producing, and popular for its fragrant blossoms and edible yield.",
    hasAward: false,
    link: "https://www.thesill.com/products/improved-meyer-lemon-tree?"
  }
];

const plantsGardenSecondaryProducts: SecondaryProduct[] = [
  {
    id: "plants-s1",
    title: "Wabi Small Fiberstone Planter",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/61E6bYT8Q0gkES3EstnjPp/d471cfb831490412dd59b9ab2569d38d/logo-crate_barrel.png", // Crate & Barrel
    image: "https://images.ctfassets.net/6dgb2p7c933b/2Qf5Hi5GjZa95MDuY74K4q/28ec347bd97f99409458c13c8ca22aec/wabi-small-fiberstone-planter.jpg",
    description: "A contemporary minimalist planter made from fiberstone with clean modern lines and muted finishes—elevates plant displays with sculptural presence.",
    link: "https://www.crateandbarrel.com/wabi-small-sand-fiberstone-planter-by-leanne-ford/s550630"
  },
  {
    id: "plants-s2",
    title: "Natural Cedar Raised Garden Beds",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6cdbA3ByiCPZq1KvBlpGGC/7f3402e8249f638302d4eb61cfddb49f/logo-eartheasy.png", // Earth Easy
    image: "https://images.ctfassets.net/6dgb2p7c933b/7F1EDHkKH52o1lSXapCE3j/7595e9a23fd4076cf048082d71ca844b/natural-cedar-raised-garden-beds.jpg",
    description: "Simple, rot‑resistant cedar garden beds—stackable or modular, ideal for eco‑friendly backyard gardening.",
    link: "https://eartheasy.com/natural-cedar-raised-garden-beds/"
  },
  {
    id: "plants-s3",
    title: "Cedar Chicken Coop & Run",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/5r1T8H2XOmNIxqhhLm7hTn/2539afe0c85aabb3d76d20e17e3fff2a/logo-williams-sonoma.png", // Williams Sonoma Home
    image: "https://images.ctfassets.net/6dgb2p7c933b/imIR9JiWb9er4D6FMj8xn/5cae857678a2d1442639dffc03e8b5ae/cedar-chicken-coop-and-run.jpg",
    description: "Traditional cedar-framed coop with integrated nesting and an attached run—designed for your backyard flock with planter functionality.",
    link: "https://www.williams-sonoma.com/products/cedar-chicken-coop-with-planter/"
  }
];

const plantsGardenData: CategorySectionProps = {
  title: "Plants & Garden",
  description: "These are the raised beds, greenhouses, plants, and decor that help you grow your own—whether it’s herbs on the patio or a full backyard harvest.",
  authors: plantsGardenAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: plantsGardenPrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: plantsGardenSecondaryProducts,
  backgroundColor: "#F3F3ED"
};

// Section 4: Relax & Rejuvenate
const relaxRejuvenateData: CategorySectionProps = {
  title: "Relax & Rejuvenate",
  description: "Wellness, built into your yard. From sculptural chaise lounges to cold plunges and cedar saunas, these picks turn your yard into a place to recharge—beautifully.",
  authors: relaxRejuvenateAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: createUniqueProducts(baseProducts, "relax"),
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: createUniqueSecondaryProducts(baseSecondaryProducts, "relax"),
  backgroundColor: "#E5E5D5"
};

// Section 5: Learn & Play - Real Data
const learnPlayPrimaryProducts: PrimaryProduct[] = [
  {
    id: "learn-1",
    title: "Teak Outdoor Kids Picnic Table",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1nQCkX4LyWOPVVzBVLG0GC/2459dc6dc33689e7715af9032ebfbec3/logo-crate_barrel.png", // Crate & Barrel brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/376fqmX3J7k4MX8q1OhG9p/31f60b103b11d8b3406f7f806237dcd8/teak-outdoor-kids-picnic-table.jpg?h=500",
    description: "A child-sized picnic table constructed of durable teak—sturdy, weather-resistant, and sized for little outdoor dining or craft time.",
    hasAward: true,
    link: "https://www.crateandbarrel.com/teak-outdoor-kids-picnic-table-by-polywood/s297484"
  },
  {
    id: "learn-2",
    title: "Kid's Adirondack Chair",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1IlEZSictf5qoQ3to8tzVg/9680fc1318ec8d6df2feb2f9cd5477d5/logo-neighbor.png", // Neighbor brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/3wimuqKpsATlhvFchesDhW/4b6611d07456bb663f76cbaf3b0c6fc0/kids-adirondack-chair.jpg?h=500",
    description: "A scaled-down teak Adirondack chair with outdoor-rated finish—simple, durable seating tailored to children's proportions.",
    hasAward: false,
    link: "https://neighboroutdoor.sjv.io/raoE3Q"
  },
  {
    id: "learn-3",
    title: "Medium Oval Trampoline",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4QbYL2gcdHnV9IsPemgaov/c083bde3f02df784fd6ef727d10e2906/logo-springfree-trampoline.png", // Springfree brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/2HA7jFjYJuBOPUJA7WcPn8/72877003d26936b5ff413838de1c4ee2/medium-oval-trampoline.jpg?h=500",
    description: "Safety-first trampoline featuring flexible rods and soft-edge design—provides a large jumping surface with enclosure for safe play.",
    hasAward: false,
    link: "https://www.springfreetrampoline.com/products/medium-oval-trampoline"
  },
  {
    id: "learn-4",
    title: "Water Table",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/7E2Zg1um3qcOMcCOqbKP08/0bcd6bd65cb9ad18aefcf1863200de72/logo-kiwico.png", // KiwiCo brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/6KMHXbJlDB2vv0gkPD695k/3777177d42d4677f8cd52062a45161f5/water-table.jpg?h=500",
    description: "A hands-on water play table designed for young children—encourages sensory learning, creative play, and outdoor engagement.",
    hasAward: false,
    link: "https://www.kiwico.com/us/store/dp/water-and-sand-sensory-table/5455?"
  }
];

const learnPlaySecondaryProducts: SecondaryProduct[] = [
  {
    id: "learn-s1",
    title: "Echo Heights Playhouse",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1uUYt7rnGEIddtyr6hixxF/536574c4fa1f6804c2a3a4582bbce692/logo-backyard-discovery.png", // Backyard Discovery
    image: "https://images.ctfassets.net/6dgb2p7c933b/5DpnvuWHK2EuyTMWEbMsZI/cfeacd5558cb589a4fd532cba5ffba66/echo-heights-playhouse.jpg",
    description: "A cedar playhouse featuring slide, wrap-around deck, and play kitchen—designed to spark imaginative outdoor play.",
    link: "https://www.backyarddiscovery.com/products/echo-heights-playhouse"
  },
  {
    id: "learn-s2",
    title: "Stepping Stumps",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/IuVjw1KVHxlQNeP9OP1H5/6f5b9f6a1ac6aff7680814824c923ac5/logo-natural-playgrounds.png", // Natural Playgrounds
    image: "https://images.ctfassets.net/6dgb2p7c933b/RP0MZPHDSjazrBONniDVl/a34bd077e26b5c4ea8ba52061db03767/stepping-stumps.jpg",
    description: "Hardwood stumps of varying heights used as natural stepping/balancing elements—encourages gross motor play in landscapes.",
    link: "https://naturalplaygroundsstore.com/product/Stepping-Stumps-(set-of-4)"
  }
];

const learnPlayData: CategorySectionProps = {
  title: "Learn & Play",
  description: "Designed to get everyone outside. These are the playhouses, trampolines, and water tables that turn the backyard into a screen-free zone—where kids roam and imaginations run wild.",
  authors: learnPlayAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: learnPlayPrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: learnPlaySecondaryProducts,
  backgroundColor: "#F3F3ED"
};

// Section 6: Build with the Best - Real Data
const buildBestPrimaryProducts: PrimaryProduct[] = [
  {
    id: "build-1",
    title: "Horizontal Privacy Vinyl Fence in Cypress",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/1wkxWxVAXdaEoyG4yiPA1e/dfa27444f191e2e5751540294ba8964c/logo-catalyst-fencing.png", // Catalyst brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/43IRj6PTtGWJACZzsvAS7x/5feb4b7ac13ee886fd0dcf1ee8b81bae/horizontal-privacy-vinyl-fence-in-cypress.jpg?h=500",
    description: "A modern vinyl privacy fence with wood‑grain Cypress texture—low maintenance and clean, horizontal aesthetics.",
    hasAward: true,
    link: "https://www.catalystfence.com/fence/madison/"
  },
  {
    id: "build-2",
    title: "Charlestone Paver",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/36NgcJABAYAapYESfN3RLQ/e10d948bef95be7588460320773de305/logo-belgard.png", // Belgard brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/2SsS3nxiZ85QhdgazRQWjD/46ecbbc2b45f815f244156fa4605571b/charlestone-paver.jpg?h=500",
    description: "Create the timeless look of hand-cobbled stone.",
    hasAward: false,
    link: "https://www.belgard.com/products/pavers/charlestone-paver/"
  },
  {
    id: "build-3",
    title: "Meridian Decking in Shoreside",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/7ag41RbPmE9RavnQyLF1iH/b7e113433f1b89de986590babd0db889/logo-moisture-shield.png", // Moistureshield brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/2KnNZB4QBjDR16wqOkzvm/3fa9240221001ae6920a3d14f520de6d/meridian-decking-in-shoreside.jpg?h=500",
    description: "Composite decking with a natural wood-grain Shore‑like finish; durable, low‑maintenance, and water-resistant.",
    hasAward: false,
    link: "https://www.moistureshield.com/products/composite-decking/meridian/"
  },
  {
    id: "build-4",
    title: "Pea Gravel",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/71YNUpLs20THbx7Tp20Yee/12b4c49bd25a10b93482e261008d3f88/logo-kolorscape.png", // KolorScape brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/5EohbDq1iHh8auw9lj8PwS/98ebe8ca5217cc9866acce18865ae554/pea-gravel.jpg?h=500",
    description: "Clean, uniform pea gravel typically in muted earth tones—versatile, budget-friendly with good drainage for pathways or borders.",
    hasAward: false,
    link: "https://www.lowes.com/pd/Kolor-Scape-0-5-cu-ft-Pea-Gravel/1000750714"
  }
];

const buildBestSecondaryProducts: SecondaryProduct[] = [
  {
    id: "build-s1",
    title: "Premium Brown Bark Mulch",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4PYa2Bv6rev1fK5yKEb0Rw/e8cb9a99bc87653c9cc9a34cbc1bf85c/logo-lowes.png", // Lowe's
    image: "https://images.ctfassets.net/6dgb2p7c933b/1NVzX3BOHOIpQbeYKyEfTp/e339b4ea39fad8f945c403065148f385/premium-brown-bark-mulch.jpg",
    description: "Natural bark mulch that helps retain soil moisture, suppress weeds, and add a rich brown finish to planted beds.",
    link: "https://www.lowes.com/pd/Premium-2-cu-ft-Dark-Brown-Hardwood-Mulch/5002118533"
    
  },
    {
    id: "build-s2",
    title: "Cyber Tech 18‑Light LED String Light Set",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/2S8c6ZrSNMDTot8a3SWyK0/f66c5d85858510533f1c843ca43a3b3e/logo-lamps-plus.png", // Lamp Plus
    image: "https://images.ctfassets.net/6dgb2p7c933b/3ezjLFiMXigG4tvo8TgGRo/ffb27f1eaea57df7eed67ffa66923e70/cyber-tech-18-light-led-string-light-set.jpg",
    description: "Festive overhead string lighting with 18 LED bulbs, known for reliability—used in nearly 75% of Yardzen projects for ambient illumination.",
    link: "https://cybertechlighting.com/product/sl-4818-48ft-led-string-light-with-18-bulbs-3000k/"
  },
  {
    id: "build-s3",
    title: "Dog‑Ear Picket Vinyl Fence, White",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/13VwoHKV6Wvizet3xL2FuH/1127d901b0dc5f4e8332bfd4d59f38ee/logo-catalyst-fencing.png", // Catalyst
    image: "https://images.ctfassets.net/6dgb2p7c933b/1u0NMbTuo3pb7q95atmMHC/be8dcebd5994d9efe4c393fde77f142a/dog-ear-picket-vinyl-fence-white.jpg",
    description: "Classic white picket fence with dog‑ear post caps in durable vinyl—traditional look, minimal upkeep.",
    link: "https://www.catalystfence.com/products/vinyl-and-molded-fences"
  },
  {
    id: "build-s4",
    title: "Quarziti 2.0 24″ Paver in Glacier",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/72LlvYV7quGt5OfLX6SwIN/a7bf195f980134ba905b1ab060675b70/logo-belgard.png", // Belgard
    image: "https://images.ctfassets.net/6dgb2p7c933b/2R1ntjhwmFflGL4LIeCFBs/de7bfb70571d0bff2a197f5affdd0039/quarziti-2-0-24-paver-in-glacier.jpg",
    description: "Contemporary, large-format paver in cool gray tones—modern stone look with durability and clean lines.",
    link: "https://www.belgard.com/products/porcelain-pavers/quarziti-20/"
  },
  {
    id: "build-s5",
    title: "Max Spread Brass Path & Area Light",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/7cluWWhHWucd9ilUsXYlUw/e530b77504c3a796564ead77d9f08859/logo-volt.png", // VOLT
    image: "https://images.ctfassets.net/6dgb2p7c933b/yZpxgmk2XNGMVhvfnaYPw/f938a0d893574c4bf56bec894fd3b8f2/max-spread-brass-path-and-area-light.jpg",
    description: "High‑quality brass lighting fixture for paths and landscape areas—low-voltage LED, long-lasting finish.",
    link: "https://www.voltlighting.com/max-spread-brass-path-light"
  },
];

const buildBestData: CategorySectionProps = {
  title: "Build with the Best",
  description: "The materials that do the heavy lifting. Think pavers, decking, gravel—everything that brings structure, flow, and style to your outdoor space. These are our go-tos for a reason.",
  authors: buildBestAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: buildBestPrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: buildBestSecondaryProducts,
  backgroundColor: "#E5E5D5"
};

// Section 7: Exterior of Home - Real Data
const exteriorHomePrimaryProducts: PrimaryProduct[] = [
  {
    id: "exterior-1",
    title: "Sadie Sconce",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6gTtZ5R05eKhsSPVKgFbeM/eaeef3db56082265e08b920268b3298e/logo-rejuvenation.png", // Rejuvenation brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/27Li7VC8u0m8ivuj646B82/879c8e0d7867c66201b0c2e15b9eeea0/sadie-sconce.jpg?h=500",
    description: "A refined outdoor wall sconce with classic proportions, weather-rated materials, and elegant detailing—illuminates exteriors with character.",
    hasAward: true,
    link: "https://www.rejuvenation.com/products/sadie-sconce/"
  },
  {
    id: "exterior-2",
    title: "Cloud Cover",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4iqJadoTyuC1XpcRXWit6F/91a2cd10adebfcbbcd4a6aec71d5e816/logo-benjamin-moore.png", // Benjamin Moore brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/4RuF6XcdGti3u7Z7ECCxJZ/308f61cd3dcb0802a6d1425017d57719/cloud-cover.jpg?h=500",
    description: "A soft and versatile neutral white paint—warm-toned and extremely flexible for exteriors or trim.",
    hasAward: false,
    link: "https://www.benjaminmoore.com/en-us/paint-colors/color/oc-25/cloud-cover"
  },
  {
    id: "exterior-3",
    title: "Coastline Bi‑Fold Door",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/20NQsai1pWS31V4j7aTWGO/6a9868a758de1c24ec3cd76cf8cd741f/logo-marvin.png", // Marvin brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/5VFJuHB2BDuEt3sDVrggti/377d2c0a1e59f08cec830f1bdd1ea86e/coastline-bi-fold-door.jpg?h=500",
    description: "Multi-panel folding patio door that opens wide to blend interior and exterior spaces, maximizing light and seamless flow.",
    hasAward: false,
    link: "https://www.marvin.com/products/doors/bi-fold/coastline-bi-fold-door"
  },
  {
    id: "exterior-4",
    title: "Rough Cut Veneer in Casa Blanca",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/6F5oreERMyXoh5Nh8Er5n3/36ab3a9f31999becb5b7c42097187546/logo-el-dorado-stone.png", // Eldorado Stone brand placeholder
    image: "https://images.ctfassets.net/6dgb2p7c933b/3pm125RmEMPj2hDCOg6xuP/0a226dfb711ed654202cf84d9474f72a/rough-cut-veneer-in-casa-blanca.jpg?h=500",
    description: "Textured stone veneer with light, neutral tones—adds dimension and natural warmth to facades or accent walls.",
    hasAward: false,
    link: "https://www.eldoradostone.com/products/roughcut/#casa-blanca"
  }
];

const exteriorHomeSecondaryProducts: SecondaryProduct[] = [
  {
    id: "exterior-s1",
    title: "Post Mount Locking Mailbox",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/5fsq7yTiikU2xqx4rHUiAK/1c3e863a1eb3ceb6b389eaf2f2a3fd47/logo-adoorn.png", // Adoorn Mailbox
    image: "https://images.ctfassets.net/6dgb2p7c933b/3lOU7rfMbjzw9vACURFAqh/66f37454e9631084102e4763bfb01145/post-mount-locking-mailbox.jpg",
    description: "Durable locking mailbox with secure latch and sturdy post-mount design—streamlined and practical.",
    link: "https://www.adoorn.com/products/post-mount-mailbox"
  },
  {
    id: "exterior-s2",
    title: "Cedar A/C Privacy Screen",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/34tjjtVUgiTtGpWk7lPGlT/50cb67d2ad8bce4fc8735f1693cc1e9f/logo-wayfair.png", // Wayfair
    image: "https://images.ctfassets.net/6dgb2p7c933b/4hOC25W5foowYvUmyXa3mf/437b89e7d47befe4aa9345c297134898/cedar-ac-privacy-screen.jpg",
    description: "Compact cedar-finished screen designed to conceal air-conditioning units while blending with landscape palette.",
    link: "https://www.wayfair.com/outdoor/pdp/greenes-fence-cedar-outdoor-air-conditioning-cover-privacy-screen-hbyw1054.html?piid=64791934"
  },
  {
    id: "exterior-s3",
    title: "Graphite",
    brandLogo: "https://images.ctfassets.net/6dgb2p7c933b/4oWwaXFIbRa81hoQ9m58za/6ff7d65e74d8e805c4b256578db3239d/logo-benjamin-moore.png", // Benjamin Moore
    image: "https://images.ctfassets.net/6dgb2p7c933b/XLDZOMOnoRmOUkt3fjzvt/af60f003989dc04d342d44816d541138/graphite.jpg",
    description: "A deep charcoal exterior paint—dramatic, refined, and works well on accent doors, trim, or siding.",
    link: "https://www.benjaminmoore.com/en-us/paint-colors/color/1603/graphite"
  }
];

const exteriorHomeData: CategorySectionProps = {
  title: "Exterior of Home",
  description: "From paint colors to windows and doors, these picks elevate your home’s exterior and set the tone for all that follows—creating the perfect backdrop for a beautiful yard.",
  authors: exteriorHomeAuthors,
  primarySectionTitle: "Designer Picks",
  primaryProducts: exteriorHomePrimaryProducts,
  secondarySectionTitle: "Also Great",
  secondarySectionDescription: "",
  secondaryProducts: exteriorHomeSecondaryProducts,
  backgroundColor: "#F3F3ED"
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
            <HeroSection />
      <CategorySection {...gatherData} />
      <CategorySection {...cookDineData} />
      <CategorySection {...plantsGardenData} />
      <CategorySection {...relaxRejuvenateData} />
      <CategorySection {...learnPlayData} />
      <CategorySection {...buildBestData} />
      <CategorySection {...exteriorHomeData} />
            <PageDescription />
    </div>
  );
}