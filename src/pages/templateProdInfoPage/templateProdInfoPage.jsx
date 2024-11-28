export const TemplateProdInfoPage = ({
  info,
  technology,
  name,
  id,
  whatsIncluded,
  prodInfoImg,
  price,
}) => {
  return (
    <TemplateProdInfoPage
      info={info}
      technology={technology}
      name={name}
      key={id}
      whatsIncluded={whatsIncluded}
      prodInfoImg={prodInfoImg}
      price={price}
    />
  );
};
