import { createRoot } from "react-dom/client";
import { GalleryCard } from "./components/Card.jsx";

const App = () => {
  return (
    <>
    <ul id="gallery" class="container error-container gallery home-gallery">
    <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg"
          eventName="2023 Dallas Soul Flower Music Fest"
          date="Saturday, June 17, 2:00 PM"
          location="Main Street Garden Park • Dallas, TX"
          price="10.00"
        />
        <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg"
          eventName="2023 Dallas Soul Flower Music Fest"
          date="Saturday, June 17, 2:00 PM"
          location="Main Street Garden Park • Dallas, TX"
          price="10.00"
        />
        <GalleryCard
          imageUrl="https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg"
          eventName="2023 Dallas Soul Flower Music Fest"
          date="Saturday, June 17, 2:00 PM"
          location="Main Street Garden Park • Dallas, TX"
          price="10.00"
        />
    </ul>
    </>
  );
};

const container = document.getElementById("main-gallery");
const root = createRoot(container);
root.render(<App />);