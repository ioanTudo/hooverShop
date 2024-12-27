import "./cleaningTipsPage.css";

export const CleaningTipsPageDisplay = ({ text1, text2, text3, title, id }) => {
  return (
    <div className="list_container">
      <ul key={id}>
        <h3>{title}</h3>
        <li>
          <p>{text1}</p>
        </li>
        <li>
          <p>{text2}</p>
        </li>
        <li>
          <p>{text3}</p>
        </li>
      </ul>
    </div>
  );
};
