import { useState } from "react";
import { Default, Interested, Going } from "./Buttons.jsx";

const InteractionsButton = () => {
  const [renderInteraction, setInteraction] = useState("default");

  const handleInteractions = (target) => {
    setInteraction(target);
  };

  return (
    <div className="interactions-container">
      {renderInteraction === "default" && (
        <Default
          isGoing={() => handleInteractions("going")}
          isInterested={() => handleInteractions("interested")}
        />
      )}
      {renderInteraction === "going" && (
        <Going isDefault={() => handleInteractions("default")} />
      )}
      {renderInteraction === "interested" && (
        <Interested
          isDefault={() => handleInteractions("default")}
          isGoing={() => handleInteractions("going")}
        />
      )}
    </div>
  );
};

export default InteractionsButton;
