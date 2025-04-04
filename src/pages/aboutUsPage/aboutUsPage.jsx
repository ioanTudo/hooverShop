import { AboutUs_data } from "../../data";

import { AboutUsPageDisplay } from "./aboutUsPageDisplay";
import "./aboutUs.css";
import "../../component/footer/footer.css";

export const AboutUsPage = () => {
  return (
    <>
      {AboutUs_data.map((data) => (
        <AboutUsPageDisplay
          key={data.id}
          text={data.text}
          title={data.title}
          moreInfo={data.moreInfo}
          companyDetails={data.companyDetails}
          companyAdress={data.companyAdress}
          companyLocation={data.companyLocation}
        />
      ))}
    </>
  );
};
