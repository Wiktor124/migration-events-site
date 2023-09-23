const MyComponent = ({ id, going, interested }) => {
  return (
    <div className="going-and-interested" data-id={id}>
      <button
        className="going"
        data-id={id}
        data-interaction={going}
        data-template={going}
      >
        Going!
      </button>
      <button
        className="interested"
        data-id={id}
        data-interaction={interested}
        data-template={interested}
      >
        Interested
      </button>
    </div>
  );
};

export {MyComponent};