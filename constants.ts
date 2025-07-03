// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Jay",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Passionate Frontend Developer",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/giabao15703",
  facebook: "https://www.facebook.com/tran.gia.bao.217779/?locale=vi_VN",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Nextpro",
    image: "/projects/nextpro.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Nextpro is a B2B e-commerce marketplace connecting bulk buyers and sellers with streamlined bidding and quoting.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://nextpro.io/market-research",
    tech: ["angular", "tailwind", "Python","figma"],
  },
  {
    name: "CNL Gaming",
    image: "/projects/CNL.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "CNL Gaming is an e-commerce platform for buying and selling games, game codes, and gaming accounts.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://cnlgaming.com/",
    tech: ["PHP","tailwind", "figma"],
  },
  {
    name: "Secretswingerlust",
    image: "/projects/SSL.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Secretswingerlust is an adult e-commerce platform connecting consenting adults for sexual needs, experiences, and event bookings. ",
    gradient: ["#245B57", "#004741"],
    url: "https://development.secretswingerlust.com/home",
    tech: ["tailwind", "next", "gsap"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "Python",
    "PHP",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: ["git", "lightroom"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Secretswingerlust",
    size: ItemSize.SMALL,
    subtitle: "I work as a Frontend Developer and also assist with backend development.",
    slideImage: "/timeline/SSL.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Nextpro",
    size: ItemSize.SMALL,
    subtitle:
      "I work as a Frontend Developer, building B2B e-commerce marketplace connecting bulk buyers and sellers with streamlined bidding and quoting.",
    slideImage: "/timeline/nextpro.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "CNL Gaming",
    size: ItemSize.SMALL,
    subtitle: "I work as a Frontend Developer, building an e-commerce platform for buying and selling games, game codes, and gaming accounts.",
    slideImage: "/timeline/CNL.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "I joined CyberSkill, a software development company.",
    slideImage: "/timeline/Cyberskill.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
