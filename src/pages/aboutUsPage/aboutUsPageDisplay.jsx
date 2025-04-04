export const AboutUsPageDisplay = ({
  text,
  title,
  moreInfo,
  companyDetails,
  companyAdress,
  companyLocation,
}) => {
  return (
    <div className="aboutUs_page">
      <div>
        <h1>{title}</h1>
      </div>

      <div className="text_container">
        <p>{text}</p>
        <p>{moreInfo}</p>
      </div>

      <div className="companyDetails_container">
        <h2>Company Details</h2>
        <p>{companyDetails}</p>
        <p>{companyAdress}</p>
        <p>{companyLocation}</p>
      </div>
    </div>
  );
};
