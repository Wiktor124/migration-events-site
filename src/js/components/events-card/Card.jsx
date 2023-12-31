import {Favorites} from "./Buttons.jsx";
import InteractionsButton from "./Interactions.jsx";

const GalleryCard = ({ imageUrl, eventName, date, location, price }) => {
  return (
    <li className="gallery__card">
      <img src={imageUrl} alt={eventName} />
      <div className="gallery__text">
        <div className="event__info">
          <h3>{eventName}</h3>
          <p className="date">{date}</p>
          <p>{location}</p>
          <strong>${price}</strong>
        </div>
        <InteractionsButton />
        <Favorites />
      </div>
    </li>
  );
};

export default GalleryCard;
