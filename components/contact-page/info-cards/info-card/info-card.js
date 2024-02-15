import css from "./info-card.module.css";

const InfoCard = ({ title, children }) => {
  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      <div className={css["content-container"]}>{children}</div>
    </div>
  );
};

export default InfoCard;
