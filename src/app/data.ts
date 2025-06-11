import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import banner3 from "../images/banner-3.jpg";
import avatar from "../images/avatar.png";
import member from "../images/testimonial3.jpg";

import { hero, testimonial, team } from "@/utils/type"; //Destructuring

export const heroData: hero[] = [
  {
    id: 1,
    image: banner1,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "We build top-notch projects",
  },
  {
    id: 2,
    image: banner2,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "We use high-quality materials",
  },
  {
    id: 3,
    image: banner3,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "Your Vision, Our Mission",
  },
];

export const testimonialData: testimonial[] = [
  {
    id: 1,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Ademola Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 2,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Adeola Fayemi",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 3,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Sharon Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
];

export const teamData: team[] = [
  {
    id: 1,
    image: member,
    name: "Azeez Adeyemi",
    position: "Founder & CEO",
  },
  {
    id: 2,
    image: member,
    name: "Ali Ajibade",
    position: "Head of Architecture",
  },
  {
    id: 3,
    image: member,
    name: "Adedotun Ajibade",
    position: "Construction Manager",
  },
];

export const services = [
  {
    id: 1,
    title: "Building / Civil Designs (Building Plan & Structural Drawings)",
    desc: "For trips within a city or town",
    video: "../video/one.mp4",
    photo: "../images/1.png",
  },

  {
    id: 2,
    name: "building&civilconstruction",
    title: "Building & Civil Construction Services",
    desc: "For trips within a city or town",
    video: "../video/two.mp4",
    photo: "../images/2.png",
  },

  {
    id: 3,
    name: "buildingrenovation&maintenance",
    title: "Building Renovation & Maintenance",
    desc: "For trips within a city or town",
    video: "../video/two.mp4",
    photo: "../images/3.png",
  },

  {
    id: 4,
    name: "steelworks&planning",
    title: "Steel Works & Planning",
    desc: "For trips within a city or town",
    video: "../video/two.mp4",
    photo: "../images/4.png",
  },
];


export const projectData = {
  Residential: [
    {
      title: "Modern Villa",
      image: "../images/1.png",
      description: "Luxurious residential home.",
    },
    {
      title: "Urban Housing",
      image: "../images/2.png",
      description: "High-rise apartment complex.",
    },
  ],
  Commercial: [
    {
      title: "Office Tower",
      image: "../images/3.png",
      description: "Downtown business hub.",
    },
    {
      title: "Retail Center",
      image: "../images/4.png",
      description: "Shopping mall complex.",
    },
  ],
  Infrastructure: [
    {
      title: "Bridge Project",
      image: "../images/5.png",
      description: "State-of-the-art suspension bridge.",
    },
    {
      title: "Highway Expansion",
      image: "../images/6.png",
      description: "Multi-lane highway system.",
    },
  ],
};