import { useState } from "react";
import Default from "./interactions/Default.jsx";
import Going from "./interactions/Going.jsx";
import Interested from "./interactions/Interested.jsx";

const CardButtons = () => {
  const [renderDefault, setDefault] = useState(true);
  const [renderGoing, setGoing] = useState(false);
  const [renderInterested, setInterested] = useState(false);

  const handleToggle = (target) => {
    setDefault(target === 'default');
    setGoing(target === 'going');
    setInterested(target === 'interested');
  };
  
  return (
    <div className="interactions-container">
      {renderDefault && <Default going={() => handleToggle('going')} interested={() => handleToggle('interested')} />}
      {renderGoing && <Going onDefault={() => handleToggle('default')} />}
      {renderInterested && <Interested onDefault={() => handleToggle('default')} going={() => handleToggle('going')} />}
    </div>
  );
};

const Favorites = () => {
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);

  const handleClick = () => {
    setFavorite(!favorite);
  }

  return (
    <div>
      <button onClick={handleClick} className={favorite ? "heart heart-blue" : "heart"}></button>
    </div>
  );
}


export  {CardButtons,Favorites};