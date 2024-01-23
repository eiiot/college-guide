const config = {
  logo: <span>🎓 BHS College Guide (Alpha)</span>,
  head: (
    <>
      <meta
        name="description"
        content="A guide to the college application process for Berkeley High School students."
      />
      <meta name="og:title" content="BHS College Guide (Alpha)" />
      <link
        rel="icon"
        type="image/png"
        href="https://emojicdn.elk.sh/%F0%9F%8E%93?style=apple"
      />
      <script
        defer
        data-domain="college.bhs.sh"
        src="https://analytics.eliothertenstein.com/js/script.js"
      ></script>
    </>
  ),
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
