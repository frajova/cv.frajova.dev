import LaikaLogo from "@/images/logos/laika-logo.png";
import NetaLogo from "@/images/logos/neta-logo.png";
import MercadoLibre from "@/images/logos/mercadolibre-logo.png";
import EcloudLogo from "@/images/logos/ecloud-logo.png";
import NationalTecnolgyUniversity from "@/images/logos/utn-logo.png";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const useResumeData = () => {
  const t = useTranslations();

  return {
    name: "Francisco Valloire",
    locationLink: "https://www.google.com/maps/place/Argentina",
    initials: "FV",
    location: "Argentina, ARG",
    about: t("about"),
    summary: t("summary"),
    avatarUrl: "https://avatars.githubusercontent.com/u/9573495?s=400&u=16891b148c882c7d8d97a809e46a17016ad81b60&v=4",
    contact: {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/frajova",
          icon: GitHubLogoIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/frajova/",
          icon: LinkedInLogoIcon,
        },
      ],
    },
    education: [
      {
        school: t("education.bachelor.school"),
        degree: t("education.bachelor.degree"),
        start: "2014",
        end: "2017",
        logo: NationalTecnolgyUniversity,
      },
    ],
    work: [
      {
        company: "Laika",
        link: "https://www.linkedin.com/company/laika-app",
        badges: ["Remote"],
        title: t("work.laika.title"),
        logo: LaikaLogo,
        start: "October 2022",
        end: t("present"),
        description: [
          t("work.laika.description.1"),
          t("work.laika.description.2"),
        ],
      },
      {
        company: "Neta",
        link: "https://www.linkedin.com/company/neta-mx/",
        badges: ["Remote"],
        title: t("work.neta.title"),
        logo: NetaLogo,
        start: "January 2022",
        end: "October 2022",
        description: [
          t("work.neta.description.1"),
          t("work.neta.description.2"),
          t("work.neta.description.3"),
          t("work.neta.description.4"),
          t("work.neta.description.5"),
          t("work.neta.description.6"),
        ],
      },
      {
        company: "Mercado Libre",
        link: "https://www.mercadolibre.com.ar/",
        badges: ["Remote"],
        title: t("work.mercadolibre.title"),
        logo: MercadoLibre,
        start: "June 2021",
        end: "January 2022",
        description: [
          t("work.mercadolibre.description.1"),
          t("work.mercadolibre.description.2"),
          t("work.mercadolibre.description.3"),
          t("work.mercadolibre.description.4"),
          t("work.mercadolibre.description.5"),
        ],
      },
      {
        company: "eCloud",
        badges: ["On-site" ,"Remote"],
        link: "https://www.linkedin.com/company/ecloudagency/",
        title: t("work.ecloud.title"),
        logo: EcloudLogo,
        start: "May 2019",
        end: "June 2021",
        description: [
          t("work.ecloud.description.1"), 
          t("work.ecloud.description.2"),
          t("work.ecloud.description.3"),
          t("work.ecloud.description.4")
        ],
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React/Next.js",
    ],
  } as const;
};
