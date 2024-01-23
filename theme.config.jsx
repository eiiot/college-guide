import { Link } from "nextra-theme-docs";

const config = {
  logo: <span>Berkeley High College Guide</span>,
  project: {
    link: "https://github.com/eiiot/college-guide",
  },
  sidebar: {
    toggleButton: true,
  },
  feedback: {
    useLink: () => {
      return "mailto:eliot@eliot.sh";
    },
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Eliot Hertenstein, Gabrielle Dar, Savannah Johnson
        </a>
        .
      </span>
    ),
  },
};

export default config;
