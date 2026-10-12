export interface Plant {
  id: string;
  classification: {
    family: string;
    subFamily?: string;
    tribe?: string;
    genus: string;
    species: string;
  };
  name: string;
  otherNames: string[];
  image: string;
  gallery: {
    src: string;
    caption: string;
  }[];
  facts: PlantFacts;
  /** Short safety note shown above the description. */
  caution?: string;
  /** Markdown, from `descriptions/<id>.md`. */
  description: string;
  mapUrl?: string;
}

export type PlantUse = "food" | "medicinal" | "tea" | "wildlife" | "soil";

export type PlantPart = "leaf" | "flower" | "root" | "stem" | "seed" | "fruit";

export interface PlantFacts {
  lifecycle: "annual" | "biennial" | "perennial";
  form: "herb" | "vine" | "shrub" | "tree" | "spore plant";
  uses: PlantUse[];
  edibleParts: PlantPart[];
  /** Flowering months, 1 = January. Empty if the plant does not flower. */
  flowering: number[];
  native: string;
  height: string;
  habitat: string[];
}

const IMAGE_BASE = "https://storage.googleapis.com/www-herbcodex-org-data-prod";

const PLANTS: Omit<Plant, "description">[] = [
  {
    id: "lambs-quarters",
    classification: {
      family: "Amaranthaceae",
      genus: "Chenopodium",
      species: "C. berlandieri",
    },
    name: "Lambs Quarters",
    otherNames: ["pitseed goosefoot"],
    image: `${IMAGE_BASE}/images/lambs_quarters.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/lambs_quarters.webP`,
        caption: "Young plant with grey-green, diamond-shaped leaves",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&lat=%2036.633162&sub=5294&zoom=4&map=distribution&lng=-96.064453",
    facts: {
      lifecycle: "annual",
      form: "herb",
      uses: ["food"],
      edibleParts: ["leaf", "seed"],
      flowering: [7, 8, 9],
      native: "North America",
      height: "30–180 cm",
      habitat: ["gardens", "fields", "disturbed soil"],
    },
    caution:
      "Contains oxalates. Cook the leaves or eat them in moderation. Plants in heavily fertilised soil can store nitrates.",
  },
  {
    id: "ground-ivy",
    classification: {
      family: "Lamiaceae",
      genus: "Glechoma",
      species: "G. hederacea",
    },
    name: "Ground Ivy",
    otherNames: [
      "creeping charlie",
      "gill-over-the-ground",
      "alehoof",
      "tunhoof",
      "catsfoot",
      "field balm",
    ],
    image: `${IMAGE_BASE}/images/ground-ivy.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/ground-ivy.webP`,
        caption: "Dense mat of rounded, scalloped leaves",
      },
      {
        src: `${IMAGE_BASE}/images/ground-ivy-2.webP`,
        caption: "Kidney-shaped leaves with scalloped edges",
      },
      {
        src: `${IMAGE_BASE}/images/ground-ivy-3.webP`,
        caption: "Ground ivy covering the ground",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lat=%2036.633162&sub=3026&lng=-96.064453&subjectnumber=&map=distribution",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["medicinal", "tea"],
      edibleParts: ["leaf", "flower"],
      flowering: [4, 5, 6],
      native: "Europe and Asia",
      height: "5–30 cm",
      habitat: ["lawns", "shady areas", "woodland edges"],
    },
    caution:
      "Use only small amounts. It is toxic to horses and cattle in quantity.",
  },
  {
    id: "bird-vetch",
    classification: {
      family: "Fabaceae",
      subFamily: "Faboideae",
      tribe: "Fabeae",
      genus: "Vicia",
      species: "V. cracca",
    },
    name: "Bird Vetch",
    otherNames: ["Tufted Vetch", "Cow Vetch", "Blue Vetch", "Boreal Vetch"],
    image: `${IMAGE_BASE}/images/bird_vetch.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/bird_vetch_2.webP`,
        caption: "One-sided clusters of violet, pea-like flowers",
      },
      {
        src: `${IMAGE_BASE}/images/bird_vetch_3.webP`,
        caption: "Pinnate leaves with curling tendrils",
      },
      {
        src: `${IMAGE_BASE}/images/bird_vetch_4.webP`,
        caption: "Bird vetch spreading over a field edge",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&lat=%2036.633162&zoom=4&lng=-96.064453&subjectnumber=&sub=13109",
    facts: {
      lifecycle: "perennial",
      form: "vine",
      uses: ["wildlife", "soil"],
      edibleParts: [],
      flowering: [6, 7, 8],
      native: "Europe and Asia",
      height: "60–120 cm (climbing)",
      habitat: ["fields", "roadsides", "thickets"],
    },
    caution:
      "Vetch seeds can contain toxic compounds. Not recommended as food.",
  },
  {
    id: "black-medic",
    classification: {
      family: "Fabaceae",
      subFamily: "Faboideae",
      genus: "Medicago",
      species: "M. lupulina",
    },
    name: "Black Medic",
    otherNames: ["Black Medick", "Hop Clover", "Yellow Trefoil"],
    image: `${IMAGE_BASE}/images/black_medic.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/black_medic.webP`,
        caption: "Small yellow flower heads and three-part leaves",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&sub=6005&lng=-96.064453&zoom=4&map=distribution&lat=%2036.633162",
    facts: {
      lifecycle: "annual",
      form: "herb",
      uses: ["wildlife", "soil"],
      edibleParts: [],
      flowering: [5, 6, 7, 8, 9],
      native: "Europe and Asia",
      height: "15–45 cm",
      habitat: ["lawns", "roadsides", "dry fields"],
    },
  },
  {
    id: "burdock",
    classification: {
      family: "Asteraceae",
      genus: "Arctium",
      species: "A. lappa",
    },
    name: "Burdock",
    otherNames: ["Beggar’s Buttons", "Lappa", "Thorny Burr"],
    image: `${IMAGE_BASE}/images/burdock.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/burdock.webP`,
        caption: "First-year leaves in grass",
      },
      {
        src: `${IMAGE_BASE}/images/burdock_2.webP`,
        caption: "Second-year plant forming flower buds",
      },
      {
        src: `${IMAGE_BASE}/images/burdock_3.webP`,
        caption: "Large, wavy-edged leaves",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lng=-96.064453&lat=%2036.633162&subjectnumber=&sub=27053&map=distribution",
    facts: {
      lifecycle: "biennial",
      form: "herb",
      uses: ["food", "medicinal", "tea"],
      edibleParts: ["root", "stem", "leaf"],
      flowering: [7, 8, 9],
      native: "Europe and Asia",
      height: "Up to 2 m",
      habitat: ["roadsides", "field edges", "disturbed ground"],
    },
    caution:
      "First-year leaves can look like rhubarb or foxglove leaves, which are toxic.",
  },
  {
    id: "shepherds-purse",
    classification: {
      family: "Brassicaceae",
      genus: "Capsella",
      species: "C. bursa-pastoris",
    },
    name: "Shepherd's Purse",
    otherNames: [],
    image: `${IMAGE_BASE}/images/shepherds_purse.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/shepherds_purse.webP`,
        caption: "Plants gone to seed in a field",
      },
      {
        src: `${IMAGE_BASE}/images/shepherds_purse_2.webP`,
        caption: "Heart-shaped seed pods along the stems",
      },
      {
        src: `${IMAGE_BASE}/images/shepherds_purse_3.webP`,
        caption: "Seed stalks with triangular pods",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&sub=5222&subjectnumber=&lat=%2036.633162&lng=-96.064453&zoom=4",
    facts: {
      lifecycle: "annual",
      form: "herb",
      uses: ["food", "medicinal"],
      edibleParts: ["leaf", "seed"],
      flowering: [3, 4, 5, 6, 7, 8, 9, 10],
      native: "Europe and Asia",
      height: "10–50 cm",
      habitat: ["gardens", "fields", "roadsides"],
    },
    caution: "Do not use as a medicine during pregnancy.",
  },
  {
    id: "catnip",
    classification: {
      family: "Lamiaceae",
      genus: "Nepeta",
      species: "N. cataria",
    },
    name: "Catnip",
    otherNames: ["Catmint", "Catswort", "Catwort", "Field Balm"],
    image: `${IMAGE_BASE}/images/catnip.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/catnip.webP`,
        caption: "Grey-green, toothed leaves and a flower spike",
      },
      {
        src: `${IMAGE_BASE}/images/catnip_2.webP`,
        caption: "Flower spike with small, pale flowers",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&sub=6078&zoom=4&lat=%2036.633162&lng=-96.064453&subjectnumber=",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["medicinal", "tea"],
      edibleParts: ["leaf", "flower"],
      flowering: [6, 7, 8, 9],
      native: "Europe and Asia",
      height: "30–90 cm",
      habitat: ["field edges", "roadsides", "disturbed ground"],
    },
    caution: "Do not use as a medicine during pregnancy.",
  },
  {
    id: "clover",
    classification: {
      family: "Fabaceae",
      genus: "Trifolium",
      species: "T. repens",
    },
    name: "Clover",
    otherNames: [],
    image: `${IMAGE_BASE}/images/clover.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/clover.webP`,
        caption: "Clover in a mixed patch beside a path",
      },
      {
        src: `${IMAGE_BASE}/images/clover_close.webP`,
        caption: "Pink flower head and three-part leaves",
      },
      {
        src: `${IMAGE_BASE}/images/clover_white.webP`,
        caption: "White flower heads among the leaves",
      },
      {
        src: `${IMAGE_BASE}/images/clover_white_2.webP`,
        caption: "Dense patch of white clover in bloom",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lng=-96.064453&zoom=4&lat=%2036.633162&sub=6557&map=distribution&subjectnumber=",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food", "tea", "wildlife", "soil"],
      edibleParts: ["leaf", "flower"],
      flowering: [5, 6, 7, 8, 9],
      native: "Europe and Asia",
      height: "5–30 cm",
      habitat: ["lawns", "meadows", "roadsides"],
    },
    caution:
      "White clover can contain cyanogenic glycosides. Eat in moderation and never eat mouldy clover.",
  },
  {
    id: "dandelion",
    classification: {
      family: "Asteraceae",
      genus: "Taraxacum",
      species: "T. officinale",
    },
    name: "Dandelion",
    otherNames: [
      "Blowball",
      "Cankerwort",
      "Lion’s Tooth",
      "Piss-a-bed",
      "Priest’s Crown",
      "Puffball",
      "Swine Snout",
      "White Endive",
      "Wild Endive",
    ],
    image: `${IMAGE_BASE}/images/dandillion.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/dandillion.webP`,
        caption: "Rosette of long, toothed leaves",
      },
      {
        src: `${IMAGE_BASE}/images/dandillion_2.webP`,
        caption: "Close-up of the leaves",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lng=-96.064453&sub=3887&lat=%2036.633162&subjectnumber=&map=distribution",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food", "medicinal", "tea"],
      edibleParts: ["leaf", "flower", "root"],
      flowering: [4, 5, 6, 7, 8, 9, 10],
      native: "Europe and Asia",
      height: "5–45 cm",
      habitat: ["lawns", "fields", "roadsides"],
    },
    caution:
      "Can cause allergy in people who are sensitive to the daisy family. Talk to a doctor if you take diuretics.",
  },
  {
    id: "dock",
    classification: {
      family: "Polygonaceae",
      genus: "Rumex",
      species: "R. crispus",
    },
    name: "Dock",
    otherNames: ["Curly Dock", "Yellow Dock"],
    image: `${IMAGE_BASE}/images/dock.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/dock.webP`,
        caption: "Seed stalks among tall grass",
      },
      {
        src: `${IMAGE_BASE}/images/dock_2.webP`,
        caption: "Plant with green seed clusters near water",
      },
      {
        src: `${IMAGE_BASE}/images/dock_3.webP`,
        caption: "Mature plant with many seed spikes in a field",
      },
      {
        src: `${IMAGE_BASE}/images/dock_4.webP`,
        caption: "Tall seed spike at a field edge",
      },
      {
        src: `${IMAGE_BASE}/images/dock_5.webP`,
        caption: "Seed spikes at a field edge",
      },
      {
        src: `${IMAGE_BASE}/images/dock_red.webP`,
        caption: "Seed heads turning red-brown in late summer",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&lat=%2036.633162&lng=-96.064453&zoom=4&subjectnumber=&sub=6335",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food", "medicinal"],
      edibleParts: ["leaf", "seed"],
      flowering: [6, 7, 8, 9],
      native: "Europe and Asia",
      height: "60–120 cm",
      habitat: ["fields", "roadsides", "wet ground"],
    },
    caution:
      "High in oxalic acid. Eat only young leaves, cooked, in moderation. Avoid if you have kidney stones.",
  },
  {
    id: "dogwood",
    classification: {
      family: "Cornaceae",
      genus: "Cornus",
      species: "C. florida",
    },
    name: "Dogwood",
    otherNames: [],
    image: `${IMAGE_BASE}/images/dogwood.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/dogwood.webP`,
        caption: "Clusters of unripe berries and oval leaves",
      },
      {
        src: `${IMAGE_BASE}/images/dogwood_2.webP`,
        caption: "Branches with berry clusters and red stalks",
      },
    ],
    facts: {
      lifecycle: "perennial",
      form: "tree",
      uses: ["medicinal", "wildlife"],
      edibleParts: [],
      flowering: [4, 5],
      native: "Eastern North America",
      height: "6–12 m",
      habitat: ["woodland edges", "forests"],
    },
    caution: "The berries are bitter and are not food for people.",
  },
  {
    id: "false-dandelion",
    classification: {
      family: "Asteraceae",
      genus: "Hypochaeris",
      species: "H. radicata",
    },
    name: "False Dandelion",
    otherNames: ["Flatweed", "Catsear", "Hawkweed"],
    image: `${IMAGE_BASE}/images/false_dandelion.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/false_dandelion.webP`,
        caption: "Plant growing through a crack in concrete",
      },
      {
        src: `${IMAGE_BASE}/images/false_dandelion_2.webP`,
        caption: "Yellow flower head on a branched stalk",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=5740&lng=-96.064453&lat=%2036.633162&map=distribution&subjectnumber=&zoom=4",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food"],
      edibleParts: ["leaf", "flower", "root"],
      flowering: [5, 6, 7, 8, 9],
      native: "Europe",
      height: "20–60 cm",
      habitat: ["lawns", "pastures", "roadsides"],
    },
    caution: "Toxic to horses in quantity.",
  },
  {
    id: "field-penny-cress",
    classification: {
      family: "Brassicaceae",
      genus: "Thlaspi",
      species: "T. arvense",
    },
    name: "Field Pennycress",
    otherNames: ["Frenchweed", "Stinkweed"],
    image: `${IMAGE_BASE}/images/field_penny_cress.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/field_penny_cress.webP`,
        caption: "Stem with round, flat seed pods",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=6524&lng=-96.064453&lat=%2036.633162&zoom=4&map=distribution&subjectnumber=",
    facts: {
      lifecycle: "annual",
      form: "herb",
      uses: ["soil"],
      edibleParts: [],
      flowering: [4, 5, 6],
      native: "Europe and Asia",
      height: "30–60 cm",
      habitat: ["fields", "roadsides", "disturbed areas"],
    },
    caution:
      "Bitter mustard oils make older plants and seeds unpleasant. It can take up heavy metals from polluted soil.",
  },
  {
    id: "fleabane",
    classification: {
      family: "Asteraceae",
      genus: "Erigeron",
      species: "E. annuus",
    },
    name: "Fleabane",
    otherNames: ["Annual Fleabane", "Daisy Fleabane", "Eastern Daisy Fleabane"],
    image: `${IMAGE_BASE}/images/fleabane.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/fleabane.webP`,
        caption: "Patch of fleabane in bloom",
      },
      {
        src: `${IMAGE_BASE}/images/fleabane_2.webP`,
        caption: "White, daisy-like flowers with yellow centres",
      },
      {
        src: `${IMAGE_BASE}/images/fleabane_3.webP`,
        caption: "Branched flowering stems",
      },
      {
        src: `${IMAGE_BASE}/images/fleabane_4.webP`,
        caption: "Close-up of a single flower",
      },
      {
        src: `${IMAGE_BASE}/images/fleabane_5.webP`,
        caption: "Flowers among tall grass",
      },
    ],
    facts: {
      lifecycle: "annual",
      form: "herb",
      uses: ["medicinal", "wildlife"],
      edibleParts: [],
      flowering: [5, 6, 7, 8, 9],
      native: "North America",
      height: "30–90 cm",
      habitat: ["fields", "meadows", "roadsides"],
    },
  },
  {
    id: "horsetail",
    classification: {
      family: "Equisetaceae",
      genus: "Equisetum",
      species: "E. arvense",
    },
    name: "Horsetail",
    otherNames: [
      "Field Horsetail",
      "Common Horsetail",
      "Snake Grass",
      "Pewterwort",
      "Scouring Rush",
      "Shavegrass",
    ],
    image: `${IMAGE_BASE}/images/horsetail.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/horsetail.webP`,
        caption: "Jointed stems with whorls of thin branches",
      },
      {
        src: `${IMAGE_BASE}/images/horsetail_2.webP`,
        caption: "Clump of horsetail at a woodland edge",
      },
    ],
    facts: {
      lifecycle: "perennial",
      form: "spore plant",
      uses: ["medicinal", "tea"],
      edibleParts: [],
      flowering: [],
      native: "Northern Hemisphere",
      height: "10–60 cm",
      habitat: ["moist soil", "ditches", "field edges"],
    },
    caution:
      "Contains thiaminase, which breaks down vitamin B1. Do not use for long periods or if you have kidney problems. Toxic to livestock.",
  },
  {
    id: "motherwort",
    classification: {
      family: "Lamiaceae",
      genus: "Leonurus",
      species: "L. cardiaca",
    },
    name: "Motherwort",
    otherNames: ["Lion’s Ear", "Lion’s Tail", "Throwwort"],
    image: `${IMAGE_BASE}/images/motherwort.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/motherwort.webP`,
        caption: "Flower spike with pink flowers at the leaf joints",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_2.webP`,
        caption: "Dense stand of flowering plants",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_3.webP`,
        caption: "Flower spikes in a dense stand",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_4.webP`,
        caption: "Tall flowering stem",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_5.webP`,
        caption: "Flowering stems at a woodland edge",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_6.webP`,
        caption: "Close-up of pink flowers and lobed leaves",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_7.webP`,
        caption: "Large patch in full bloom",
      },
      {
        src: `${IMAGE_BASE}/images/motherwort_leaf.webP`,
        caption: "Deeply lobed, toothed leaves",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lat=%2036.633162&sub=5923&lng=-96.064453&subjectnumber=&map=distribution&zoom=4",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["medicinal", "tea"],
      edibleParts: [],
      flowering: [6, 7, 8, 9],
      native: "Europe and central Asia",
      height: "60–150 cm",
      habitat: ["field edges", "waste ground", "woodland edges"],
    },
    caution:
      "Do not use during pregnancy. It can interact with heart and blood-thinning medicines.",
  },
  {
    id: "plantain",
    classification: {
      family: "Plantaginaceae",
      genus: "Plantago",
      species: "P. major",
    },
    name: "Plantain",
    otherNames: [
      "Broadleaf Plantain",
      "Common Plantain",
      "Greater Plantain",
      "White Man’s Foot",
    ],
    image: `${IMAGE_BASE}/images/plantain.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/plantain.webP`,
        caption: "Rosette of ribbed leaves with seed spikes",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&sub=6201&lng=-96.064453&zoom=4&map=distribution&lat=%2036.633162",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food", "medicinal", "tea"],
      edibleParts: ["leaf", "seed"],
      flowering: [6, 7, 8, 9],
      native: "Europe and Asia",
      height: "10–30 cm",
      habitat: ["lawns", "paths", "compacted soil"],
    },
  },
  {
    id: "raspberry",
    classification: {
      family: "Rosaceae",
      genus: "Rubus",
      species: "R. idaeus",
    },
    name: "Raspberry",
    otherNames: [],
    image: `${IMAGE_BASE}/images/raspberry.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/raspberry.webP`,
        caption: "Ripe red berries among the leaves",
      },
      {
        src: `${IMAGE_BASE}/images/raspberry_leaf.webP`,
        caption: "Leaves with pale, silvery undersides",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&zoom=4&sub=9857&lng=-96.064453&map=distribution&lat=%2036.633162",
    facts: {
      lifecycle: "perennial",
      form: "shrub",
      uses: ["food", "medicinal", "tea", "wildlife"],
      edibleParts: ["fruit", "leaf"],
      flowering: [5, 6],
      native: "Northern Hemisphere",
      height: "1–2 m",
      habitat: ["woodland edges", "clearings", "thickets"],
    },
    caution:
      "Talk to a doctor before you use raspberry leaf tea during pregnancy.",
  },
  {
    id: "st-johns-wort",
    classification: {
      family: "Hypericaceae",
      genus: "Hypericum",
      species: "H. perforatum",
    },
    name: "St. John’s Wort",
    otherNames: ["Goatweed", "Klamath Weed", "Rosin Rose", "Tipton Weed"],
    image: `${IMAGE_BASE}/images/st_johns_wort.webP`,
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&map=distribution&lng=-96.064453&lat=%2036.633162&subjectnumber=&sub=4411",
    gallery: [
      {
        src: `${IMAGE_BASE}/images/st_johns_wort.webP`,
        caption: "Yellow, five-petalled flowers",
      },
      {
        src: `${IMAGE_BASE}/images/st_johns_wort_2.webP`,
        caption: "Flower cluster with long stamens",
      },
      {
        src: `${IMAGE_BASE}/images/st_johns_wort_3.webP`,
        caption: "Plant in bloom beside a woodpile",
      },
      {
        src: `${IMAGE_BASE}/images/st_johns_wort_4.webP`,
        caption: "Stems with small, opposite leaves",
      },
      {
        src: `${IMAGE_BASE}/images/st_johns_wort_5.webP`,
        caption: "Flowers and buds",
      },
      {
        src: `${IMAGE_BASE}/images/st_johns_wort_6.webP`,
        caption: "Flowers among grass",
      },
    ],
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["medicinal", "tea"],
      edibleParts: [],
      flowering: [6, 7, 8],
      native: "Europe and Asia",
      height: "30–100 cm",
      habitat: ["meadows", "roadsides", "dry fields"],
    },
    caution:
      "Interacts with many medicines, including antidepressants, birth control and blood thinners. Can make skin sensitive to sunlight. Toxic to livestock.",
  },
  {
    id: "stinging-nettle",
    classification: {
      family: "Urticaceae",
      genus: "Urtica",
      species: "U. dioica",
    },
    name: "Stinging Nettle",
    otherNames: [
      "Common Nettle",
      "Nettle",
      "Brennessel",
      "Burning Nettle",
      "Hemp Nettle",
    ],
    image: `${IMAGE_BASE}/images/stinging_nettle_1.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_1.webP`,
        caption: "Stem with toothed leaves and drooping flower clusters",
      },
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_2.webP`,
        caption: "Tall plant with narrow, toothed leaves",
      },
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_3.webP`,
        caption: "Dense patch of young leaves",
      },
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_4.webP`,
        caption: "Large stand in flower",
      },
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_5.webP`,
        caption: "Young plant with toothed leaves",
      },
      {
        src: `${IMAGE_BASE}/images/stinging_nettle_6.webP`,
        caption: "Tall stand beside a building",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lng=-96.064453&map=distribution&lat=%2036.633162&zoom=4&subjectnumber=&sub=6569",
    facts: {
      lifecycle: "perennial",
      form: "herb",
      uses: ["food", "medicinal", "tea"],
      edibleParts: ["leaf", "seed"],
      flowering: [6, 7, 8, 9],
      native: "Europe, Asia and North Africa",
      height: "60–200 cm",
      habitat: ["moist rich soil", "stream banks", "field edges"],
    },
    caution:
      "The hairs sting. Wear gloves, and cook or dry the leaves before you eat them. Pick young leaves before the plant flowers.",
  },
  {
    id: "sumac",
    classification: {
      family: "Anacardiaceae",
      genus: "Rhus",
      species: "R. typhina",
    },
    name: "Sumac",
    otherNames: ["Staghorn Sumac", "Velvet Sumac"],
    image: `${IMAGE_BASE}/images/sumac.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/sumac.webP`,
        caption: "Upright cluster of yellow-green flowers",
      },
      {
        src: `${IMAGE_BASE}/images/sumac_2.webP`,
        caption: "Pinnate leaves and flower clusters",
      },
      {
        src: `${IMAGE_BASE}/images/sumac_3.webP`,
        caption: "Close-up of a flower cluster",
      },
    ],
    facts: {
      lifecycle: "perennial",
      form: "shrub",
      uses: ["food", "tea", "wildlife"],
      edibleParts: ["fruit"],
      flowering: [6, 7],
      native: "Eastern North America",
      height: "3–6 m",
      habitat: ["field edges", "roadsides", "open woods"],
    },
    caution:
      "Edible sumacs have upright, red fruit clusters. Poison sumac has hanging, white berries and grows in wet ground. Do not touch it. People with a cashew or mango allergy can react.",
  },
  {
    id: "bull-thistle",
    classification: {
      family: "Asteraceae",
      genus: "Cirsium",
      species: "C. vulgare",
    },
    name: "Bull Thistle",
    otherNames: [
      "Spear Thistle",
      "Common Thistle",
      "Hard Thistle",
      "Hare Thistle",
      "Hercules Thistle",
      "Hock About",
      "Horse Thistle",
      "Plume Thistle",
    ],
    image: `${IMAGE_BASE}/images/thistle.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/thistle.webP`,
        caption: "Plant with purple flower heads and buds",
      },
      {
        src: `${IMAGE_BASE}/images/thistle_2.webP`,
        caption: "Spiny, lobed leaves",
      },
      {
        src: `${IMAGE_BASE}/images/thistle_3.webP`,
        caption: "Low rosettes of spiny leaves",
      },
      {
        src: `${IMAGE_BASE}/images/thistle_stem.webP`,
        caption: "Spiny, winged stem",
      },
    ],
    facts: {
      lifecycle: "biennial",
      form: "herb",
      uses: ["food"],
      edibleParts: ["stem", "root", "leaf"],
      flowering: [7, 8, 9],
      native: "Europe and Asia",
      height: "60–150 cm",
      habitat: ["pastures", "roadsides", "disturbed ground"],
    },
    caution: "Remove all spines before you eat any part.",
  },
  {
    id: "wild-carrot",
    classification: {
      family: "Apiaceae",
      genus: "Daucus",
      species: "D. carota",
    },
    name: "Wild Carrot",
    otherNames: ["Bird’s Nest", "Bishop’s Lace", "Queen Anne’s Lace"],
    image: `${IMAGE_BASE}/images/wild_carrot.webP`,
    gallery: [
      {
        src: `${IMAGE_BASE}/images/wild_carrot.webP`,
        caption: "Feathery, finely divided leaves",
      },
      {
        src: `${IMAGE_BASE}/images/wild_carrot_2.webP`,
        caption: "Young plants on bare soil",
      },
    ],
    mapUrl:
      "https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=5514&subjectnumber=&lat=%2036.633162&lng=-96.064453&zoom=4&map=distribution",
    facts: {
      lifecycle: "biennial",
      form: "herb",
      uses: ["food"],
      edibleParts: ["root", "seed"],
      flowering: [6, 7, 8, 9],
      native: "Europe and south-west Asia",
      height: "30–120 cm",
      habitat: ["fields", "roadsides", "meadows"],
    },
    caution:
      "Deadly lookalikes: poison hemlock and water hemlock. Wild carrot has a hairy stem. Poison hemlock has a smooth stem with purple blotches. Do not use the seeds during pregnancy.",
  },
];

const descriptions = import.meta.glob<string>("./descriptions/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** Old plant ids that now redirect to a new id. */
export const RENAMED_PLANTS: Record<string, string> = {
  thistle: "bull-thistle",
};

export const DATA: Plant[] = PLANTS.map((plant) => {
  const description = descriptions[`./descriptions/${plant.id}.md`];
  if (!description) {
    throw new Error(`Missing description for plant "${plant.id}"`);
  }
  return { ...plant, description };
});
