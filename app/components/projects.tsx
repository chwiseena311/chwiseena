import { LinkSmLabel } from "../elements/link-sm/link-sm";
import LinkSm from "../elements/link-sm/link-sm";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <section className="projects__column">
        <h2 className="projects__heading projects__heading--professional">
          Professional
        </h2>
        <div className="project">
          <LinkSm
            href="https://code.legoeducation.com"
            title="LEGO Education Coding Platform"
            backgroundColor="var(--color-pink)"
          />
          As a senior software engineer, I worked alongside a team to develop
          the coding canvas for LEGO Education's newest in-classroom offering.
          The platform uses Blockly as its foundation and provides drag-and-drop
          coding paired with LEGO Education hardware and lesson materials. I
          touched many different parts of the app, including but not limited to
          the logic for blocks, monitors for graphing and AI blocks, custom
          classifier creation features, designs for the block toolbox and
          flyout, and the cute animation that plays on the landing page!
        </div>
        <div className="project">
          <LinkSm
            href="https://clearcompany.com/platform-overview"
            title="ClearCompany Talent Management Platform"
            backgroundColor="var(--color-pink)"
          />
          From 2018 to 2022 and ranging from a Level 1 to Level 3 Engineer, I
          worked on the ClearCompany Talent Management Platform, a web
          application that helps companies manage their employees and hiring
          processes. I worked on many different parts of the app primarily in
          the hiring and onboarding modules. I was on the team that set up the
          ADP partnership, set up a multi-interview scheduling tool with Cronofy
          integration, and a workforce planning tool, to name a few. While the
          application has changed since my time there, I am proud of the work I
          accomplished during my time at ClearCompany and am always happy to see
          where the platform is headed!
        </div>
      </section>
      <section className="projects__column">
        <h2 className="projects__heading projects__heading--personal">
          Personal
        </h2>
        <div className="project">
          <LinkSm
            href="https://christinaandtom.com"
            title="Wedding Website"
            backgroundColor="var(--color-green)"
          />
          I got married to my lovely husband in April of 2022, and instead of
          using a third-party service for our landing page, I wrote our wedding
          website by hand! This multi-paged site provides information on our
          wedding party, a schedule of events, travel information, and a gallery
          of pictures of the bride and groom. I taught myself Vue.js for this
          project!
        </div>
        <div className="project">
          <LinkSmLabel
            title="Pokémon Cherry Red ROM Hack"
            backgroundColor="var(--color-green)"
          />
          I pride myself on being a skilled Pokemon battler and Nuzlocke runner.
          However, I have friends that are not nearly as skilled. After watching
          some of said friends try and fail difficult ROM hacks, I decided to
          try making one of my own! Using FireRed as a base, I implemented a
          "catch-em-all" style hack which includes Pokémon up to gen 6, the
          physical-special split, updated trainer and gym teams, and additional
          mandatory "mini-bosses" in the form of the Hoenn gym leaders. This
          project is ongoing and is a way for me both have fun with Pokémon and
          play around with weird programming languages through the use of ROM
          hacking tools such as Hex Maniac Advanced.
        </div>
        <div className="project">
          <LinkSm
            href="https://poketypetest.com"
            title="Pokémon Type Test"
            backgroundColor="var(--color-green)"
          />
          Speaking of Pokémon, I also created a personality test that reveals a
          person's Pokémon type! The logic for this test is based on the Pokémon
          type chart and determines a user's dual-type based on how well they
          "resist" different types. I came up with this idea because I as a
          person have very strong cold-resistance, and with that in mind, came
          up with a bunch of other questions which can quantify how well a
          person would resist certain Pokemon types. From there, I added
          numerical values to each answer and compared answers to a key of each
          type's own resistance and weakness. When I take the test, I result in
          Electric/Bug, making me a Joltik!
        </div>
        <div className="project">
          <LinkSm
            href="https://nice-or-ice.com"
            title="Secret Santa Punishment Game"
            backgroundColor="var(--color-green)"
          />
          My friends and I have a weird Secret Santa tradition where in addition
          to bringing a gift for a friend, it is common practice to hide
          Smirnoff Ices among the gifts. One person picks a gift out of the pile
          and unwraps it. If it's an actual gift, they have to guess the
          recipient and the giver, but if it's a Smirnoff Ice, they have to
          drink it and then pick again. I had wrapped the URL to this website,
          and made my friends go through a "choose-your-own-adventure" style
          game to find the actual present, with plenty of punishments along the
          way! Was this a mature thing to do? Absolutely not. Should I advertise
          that I created such a thing publicly? Probably not. But it is
          something I built, so here it is!
        </div>
      </section>
    </div>
  );
}
