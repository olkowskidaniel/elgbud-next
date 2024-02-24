import css from "./textarea-form.module.css";

import { useFormContext } from "react-hook-form";

const TextAreaForm = ({ label, type, id }) => {
  const typeForm = type ? type : "text";

  const { register } = useFormContext();

  return (
    <div className={css.container}>
      <textarea
        type={typeForm}
        required
        {...register(id, { required: true })}
      />
      <div className={css.underline}></div>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default TextAreaForm;
