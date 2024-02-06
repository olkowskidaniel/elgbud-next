import css from "./info-item.module.css";

const InfoItem = ({ title, content, infoNumber }) => {
  return (
    <div className={css.container} style={{ width: `${100 / infoNumber}%` }}>
      <p className={css.title}>{title}:</p>
      <p className={css.content}>{content}</p>
    </div>
  );
};

export default InfoItem;
