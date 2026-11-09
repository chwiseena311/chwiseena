import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about__paragraph">
        My name is Christina "Chris" Lorenz-Ferris (nee de Lescinskis). I'm from
        New Jersey, went to college in Pennsylvania, and now live in
        Massachusetts, so I'm very east-coast coded. I love anything that evokes
        creativity, and am the type of person who can't play a video game
        without creating an elaborate backstory for my character. I'm described
        as very sweet, cutesy, and genuine, and I try very hard to be a good
        person.
      </div>
      <div className="about__paragraph">
        When I was a kid I wanted to be a musician. Despite my knees shaking
        when I'd play at piano recitals, I enjoy performing and found my comfort
        as a percussionist, in wind ensembles or on drum lines in marching
        bands. This love of music lasted from youth into teenage years and
        beyond, and originally my plan was to go to school for a dual degree in
        cognitive science and music, with the objective to go to grad school for
        music therapy. However, Lehigh University had other plans for me. Their
        cognitive science department required programming classes, and despite a
        childhood of playing video games and writing HTML for custom Neopets or
        GaiaOnline pages, I had never learned to code. I was convinced to go
        farther than just required classes and ended up falling in love with the
        field. I'm sure the day I called my father stating my intentions to
        switch fields was one filled with relief for him! I graduated with a
        B.A. in Cognitive Science on their Artificial Intelligence track with a
        minor in Computer Science (and two others in French and Music), and from
        there fenalged my way into the field through hard work and a friendly
        face.
      </div>
      <div className="about__paragraph">
        I am a person very molded by her connections, both friends and family.
        Despite being an only child, my youth was not lonely as my cousins were
        always around the corner. My mom had three sisters whose own families
        were spending time with ours constantly. I also am blessed with a strong
        group of friends and a loving husband. Again, I have Lehigh University
        to thank for them, as while our group is far more widespread, the
        origins stem from the Lehigh University frisbee team and marching band.
        Our group can be found playing board games, Dungeons and Dragons, on ski
        trips and concerts, and just enjoying one another's company. I am truly
        grateful for them all.
      </div>
      <div className="about__paragraph">
        In early 2026, I lost my mother to pancreatic cancer after a 20 month
        long battle. We were able to make wonderful memories and have a lot of
        hope and love during an incredibly challenging time, and while I am not
        a religious person, I do still feel my mother's love in days that are
        sunny when the weather predicts rain. Later on in the year, I
        unfortunately lost a job I adored due to a reorganization making my
        position obsolte. So, this year has not been the most kind to me.
        However, I am a fighter and an optimist, and have not stopped finding
        silver linings. Even in dark times, there is still much light and joy to
        follow.
      </div>
      <section
        className="about__likes-dislikes"
        aria-label="Likes and dislikes"
      >
        <div className="about__likes-column">
          <h3>Likes</h3>
          <ul>
            <li>Cute things</li>
            <li>Swimming</li>
            <li>Skiing</li>
            <li>Baths</li>
            <li>Board games</li>
            <li>Cold weather</li>
            <li>Pokémon</li>
            <li>Lists and graphs</li>
            <li>Roguelike games</li>
            <li>The New York Jets</li>
          </ul>
        </div>
        <div className="about__dislikes-column">
          <h3>Dislikes</h3>
          <ul>
            <li>Flies</li>
            <li>Selfishness/inconsiderateness</li>
            <li>Daylight savings</li>
            <li>Superhero movies</li>
            <li>Showers</li>
            <li>Being overheated</li>
            <li>Bar trivia</li>
            <li>The concept of timezones</li>
            <li>Competitive FPSes</li>
            <li>The New York Jets</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
