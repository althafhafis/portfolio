import project01 from "./assets/images/project.jpg";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const PROJECTS = [
  {
    id: 1,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/traveller-app/",
    sourceLink: "https://github.com/althafhafis/traveller-app",
  },
  {
    id: 2,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/efood/",
    sourceLink: "https://github.com/althafhafis/efood",
  },
  {
    id: 3,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/patch.github.io/",
    sourceLink: "https://github.com/althafhafis/patch.github.io",
  },
  {
    id: 4,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/Clothing/",
    sourceLink: "https://github.com/althafhafis/Clothing",
  },
  {
    id: 5,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/wibbitz.github.io/",
    sourceLink: "https://github.com/althafhafis/wibbitz.github.io",
  },
  {
    id: 6,
    projectImage: project01,
    viewLink: "https://althafhafis.github.io/casa/",
    sourceLink: "https://github.com/althafhafis/casa",
  },
];


export const MEDIAS = [
  {
    link: "mailto:someone@example.com",
    mediaImage: <FaEnvelope />,
  },
  {
    link: "https://github.com/althafhafis/",
    mediaImage: <FaGithub />,
  },
]