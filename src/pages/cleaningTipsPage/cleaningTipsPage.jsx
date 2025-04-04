import { CleaningTips_content } from "../../data";

import { CleaningTipsPageDisplay } from "./cleaningTipsPageDisplay";

export const CleaningTipsPage = () => {
  return (
    <div className="cleaningTips_page">
      <div className="header_container">
        <h1>cleaning tips and advice</h1>
      </div>
      <div>
        {CleaningTips_content.map((item) => (
          <CleaningTipsPageDisplay
            key={item.id}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
          />
        ))}
      </div>
    </div>
  );
};
