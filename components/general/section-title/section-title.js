import css from "./section-title.module.css";

const SectionTitle = ({ children, lineWidth, fontSize }) => {
  return (
    <div className={css.container}>
      <p style={{ fontSize: `${fontSize}` }}>{children}</p>
      <span style={{ width: `${lineWidth}` }}></span>
    </div>
  );
};
export default SectionTitle;
