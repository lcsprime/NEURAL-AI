import { capabilities, industries, technologies } from "./content";

export const capabilityImage = {
  strategy: "/images/scene-advisory.jpg",
  "product-development": "/images/practice-product.jpg",
  cloud: "/images/scene-cloud.jpg",
  security: "/images/practice-security.jpg",
  network: "/images/scene-network.jpg",
  data: "/images/scene-data.jpg",
  iot: "/images/practice-iot.jpg",
  transformation: "/images/scene-pipeline.jpg",
  staffing: "/images/practice-staffing.jpg",
};

export const industryImage = {
  healthcare: "/images/industry-health.jpg",
  "financial-services": "/images/industry-finance.jpg",
  manufacturing: "/images/industry-factory.jpg",
  "professional-services": "/images/practice-staffing.jpg",
  retail: "/images/industry-retail.jpg",
  education: "/images/scene-education.jpg",
};

export const techImage = {
  cpp: "/images/scene-code.jpg",
  golang: "/images/scene-services.jpg",
  "iot-sensors": "/images/practice-iot.jpg",
  python: "/images/practice-product.jpg",
  java: "/images/scene-advisory.jpg",
  typescript: "/images/scene-web.jpg",
  "cloud-platforms": "/images/practice-cloud.jpg",
  delivery: "/images/scene-pipeline.jpg",
  "data-platforms": "/images/scene-data.jpg",
  "security-engineering": "/images/practice-security.jpg",
  "applied-ai": "/images/scene-ai.jpg",
};

export const capabilitySlides = capabilities.map((item) => ({
  title: item.title,
  line: item.summary,
  image: capabilityImage[item.slug],
  to: `/capabilities#${item.slug}`,
}));

export const industrySlides = industries.map((item) => ({
  title: item.title,
  line: item.summary,
  image: industryImage[item.slug],
  to: `/industries#${item.slug}`,
}));

const techOrder = [
  "cloud-platforms",
  "security-engineering",
  "data-platforms",
  "delivery",
  "applied-ai",
  "iot-sensors",
  "cpp",
  "golang",
];

export const techSlides = techOrder
  .map((slug) => technologies.find((item) => item.slug === slug))
  .filter(Boolean)
  .map((item) => ({
    title: item.name,
    line: item.headline,
    image: techImage[item.slug],
    to: `/technologies#${item.slug}`,
  }));

export const fieldSlides = [
  {
    title: "A working session",
    line: "The people who scope the engagement stay on it.",
    image: "/images/practice-staffing.jpg",
    to: "/company",
  },
  {
    title: "A product bench",
    line: "Software and devices built to be handed over.",
    image: "/images/practice-product.jpg",
    to: "/capabilities#product-development",
  },
  {
    title: "A sensor path",
    line: "From the device to someone who can act on the reading.",
    image: "/images/practice-iot.jpg",
    to: "/capabilities#iot",
  },
  {
    title: "A cloud estate",
    line: "A sequenced move, then a bill you can explain.",
    image: "/images/scene-cloud.jpg",
    to: "/capabilities#cloud",
  },
  {
    title: "A working network",
    line: "Infrastructure the applications can depend on.",
    image: "/images/scene-network.jpg",
    to: "/capabilities#network",
  },
  {
    title: "A secure room",
    line: "The exposures that are real for the size of the firm.",
    image: "/images/practice-security.jpg",
    to: "/capabilities#security",
  },
];

export const contactSlides = [
  {
    title: "The lobby",
    line: "Irving, Texas. A conversation, then the work.",
    image: "/images/page-company.jpg",
    to: "/company",
  },
  {
    title: "A strategy table",
    line: "Start with what should change, and in what order.",
    image: "/images/scene-advisory.jpg",
    to: "/capabilities#strategy",
  },
  {
    title: "A campus",
    line: "Institutions that need dependable systems.",
    image: "/images/scene-education.jpg",
    to: "/industries#education",
  },
  {
    title: "A clinic",
    line: "Systems that have to be careful with the record.",
    image: "/images/industry-health.jpg",
    to: "/industries#healthcare",
  },
  {
    title: "A shopfront",
    line: "Commerce, inventory, and the path between them.",
    image: "/images/industry-retail.jpg",
    to: "/industries#retail",
  },
  {
    title: "A product screen",
    line: "Interfaces people use every day.",
    image: "/images/scene-web.jpg",
    to: "/capabilities#product-development",
  },
];

export const staffingSlides = [
  {
    title: "C++ and product engineering",
    line: "Native work and the applications around it.",
    image: "/images/scene-code.jpg",
    to: "/contact?topic=staffing",
  },
  {
    title: "Go and services",
    line: "Ingestion, gateways, and the tools that run them.",
    image: "/images/scene-services.jpg",
    to: "/contact?topic=staffing",
  },
  {
    title: "IoT and integration",
    line: "Sensors, protocols, and the edge between them.",
    image: "/images/practice-iot.jpg",
    to: "/contact?topic=staffing",
  },
  {
    title: "Cloud and data",
    line: "Platforms and the pipelines that feed them.",
    image: "/images/scene-data.jpg",
    to: "/contact?topic=staffing",
  },
  {
    title: "The additional seat",
    line: "A role written against the program, then filled.",
    image: "/images/practice-staffing.jpg",
    to: "/staffing",
  },
];

const listed = [
  ...Object.values(capabilityImage),
  ...Object.values(industryImage),
  ...Object.values(techImage),
  ...fieldSlides.map((item) => item.image),
  ...contactSlides.map((item) => item.image),
  ...staffingSlides.map((item) => item.image),
];

export const siteImages = [
  ...new Set([
    "/images/hero-studio.jpg",
    "/images/practice-cloud.jpg",
    "/images/scene-pipeline.jpg",
    "/images/rail-strategy.jpg",
    "/images/rail-cloud.jpg",
    "/images/rail-security.jpg",
    "/images/rail-network.jpg",
    "/images/rail-data.jpg",
    "/images/rail-change.jpg",
    "/images/rail-health.jpg",
    "/images/rail-finance.jpg",
    "/images/rail-factory.jpg",
    "/images/rail-services.jpg",
    "/images/rail-retail.jpg",
    "/images/rail-education.jpg",
    "/images/page-capabilities.jpg",
    "/images/page-technologies.jpg",
    "/images/page-industries.jpg",
    "/images/page-company.jpg",
    "/images/page-contact.jpg",
    "/images/page-staffing.jpg",
    "/favicon.svg",
    ...listed,
  ]),
];
