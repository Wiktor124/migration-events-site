import { useState } from "react";

const Favorites = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={favorite ? "heart heart-blue" : "heart"}
      ></button>
    </div>
  );
};

const Interested = ({ isDefault, isGoing }) => {
  return (
    <>
      <div>
        <p>You&rsquo;re Interested in going.</p>
        <button onClick={isDefault} className="button-link">
          Changed your mind?
        </button>
      </div>
      <button onClick={isGoing} className="going">
        Going!
      </button>
    </>
  );
};

const Going = ({ isDefault }) => {
  return (
    <>
      <span className="check">✔</span>

      <div>
        <p>You&rsquo;re going to this event!.</p>
        <button className="button-link" onClick={isDefault}>
          Changed your mind?
        </button>
      </div>
    </>
  );
};

const Default = ({ isGoing, isInterested }) => {
  return (
    <>
      <button className="going" onClick={isGoing}>
        Going!
      </button>
      <button className="interested" onClick={isInterested}>
        Interested
      </button>
    </>
  );
};

export { Default, Going, Interested, Favorites };
