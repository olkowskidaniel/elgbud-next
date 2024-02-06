import css from "./company-info.module.css";

import InfoItem from "./info-item/info-item";

const companyInfo = [
  {
    id: 0,
    title: "Nazwa firmy",
    content: "Firma budowlano-transportowa ELGBUD",
  },
  {
    id: 1,
    title: "Adres fimy",
    content: "Elgiszewo 143 87-408 Ciechocin pow. golubsko-dobrzyński",
  },
  {
    id: 2,
    title: "NIP",
    content: "5030064527",
  },
  {
    id: 3,
    title: "REGON",
    content: "341389985",
  },
];

const CompanyInfo = () => {
  return (
    <div className={css.container}>
      {companyInfo.map((info) => (
        <InfoItem
          key={info.id}
          title={info.title}
          content={info.content}
          infoNumber={companyInfo.length}
        />
      ))}
    </div>
  );
};

export default CompanyInfo;
