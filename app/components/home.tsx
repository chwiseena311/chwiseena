import { useEffect, useState } from "react";
import myFaceTrim from "../assets/myFaceTrim.png";
import quotes from "../assets/quotes";
import "./home.scss";

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);

  useEffect(() => {
    let rotationTimeout: ReturnType<typeof setTimeout>;
    let fadeTimeout: ReturnType<typeof setTimeout>;

    const scheduleRotation = () => {
      rotationTimeout = setTimeout(() => {
        setIsQuoteVisible(false);
        fadeTimeout = setTimeout(() => {
          setQuoteIndex((currentIndex) => (currentIndex + 1) % quotes.length);
          setIsQuoteVisible(true);
          scheduleRotation();
        }, 1000);
      }, 9000);
    };

    scheduleRotation();

    return () => {
      clearTimeout(rotationTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <main className="home">
      <h1 className="home__title">chwiseena</h1>
      <img className="home__image" src={myFaceTrim} alt="Chris" />
      <p
        className={`home__description${isQuoteVisible ? "" : " home__description--hidden"}`}
        aria-live="polite"
        aria-atomic="true"
      >
        “{quotes[quoteIndex]}”
      </p>
    </main>
  );
}
