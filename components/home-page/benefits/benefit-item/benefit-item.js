import css from "./benefit-item.module.css";

const BenefitItem = ({ icon, title, desc }) => {
  const Icon = icon;

  return (
    <div className={css["item-wrapper"]}>
      <Icon />
      <p className={css["benefit-title"]}>{title}</p>
      <p className={css.desc}>{desc}</p>
    </div>
  );
};

export default BenefitItem;
