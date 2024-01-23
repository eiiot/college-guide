import { Link } from "nextra-theme-docs";

const config = {
  logo: <span>BHS College Guide (Alpha)</span>,
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
        {new Date().getFullYear()} © Gabrielle Dar,{" "}
        <a href="https://eliothertenstein.com" target="_blank">
          Eliot Hertenstein
        </a>
        , and Savannah Johnson.
      </span>
    ),
  },
};

export default config;
