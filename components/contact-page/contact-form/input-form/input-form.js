import css from "./input-form.module.css";

const InputForm = ({ label, type, id }) => {
  const typeForm = type ? type : "text";
  return (
    <div className={css.container}>
      <input type={typeForm} id={id} name={id} required />
      <div className={css.underline}></div>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default InputForm;
