import { createRoot } from "react-dom/client";
import { Header } from "./components/Header.jsx";
import GalleryCard from "./components/events-card/Card.jsx";

const App = () => {
  return (
    <>
      <Header />
      <ul
        id="gallery"
        className="container error-container gallery home-gallery"
      >
        <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg"
          eventName="2023 Dallas Soul Flower Music Fest"
          date="Saturday, June 17, 2:00 PM"
          location="Main Street Garden Park • Dallas, TX"
          price="10.00"
        />
        <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686105236/Cetav/events/music-002_wex6ub.jpg"
          eventName="Hookie DC (2023): Cloud 9"
          date="Friday, June 16, 12:00 PM."
          location="Festival Grounds • Fort Washington, MD."
          price="60.00"
        />
        <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-004_h768uj.jpg"
          eventName="Kostume Kult Presents: A.I. A.I. Oh! - Black &amp; Light Ball 2023"
          date="Saturday, December 2, 5:24 PM."
          location="The Tailor Public House • New York, NY."
          price="44.82"
        />
      </ul>
    </>
  );
};

const container = document.getElementById("main-gallery");
const root = createRoot(container);
root.render(<App />);
