import css from "./textarea-form.module.css";

const TextAreaForm = ({ label, type, id }) => {
  const typeForm = type ? type : "text";
  return (
    <div className={css.container}>
      <textarea type={typeForm} id={id} name={id} required />
      <div className={css.underline}></div>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default TextAreaForm;
