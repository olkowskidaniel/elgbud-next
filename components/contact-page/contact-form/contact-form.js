import css from "./contact-form.module.css";

import InputForm from "./input-form/input-form";
import TextAreaForm from "./textarea-form/textarea-form";
import PrimaryButton from "@/components/general/primary-button/primary-button";

const ContactForm = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>SKONTAKTUJ SIĘ Z NAMI</p>
      <div className={css["form-container"]}>
        <form>
          <InputForm id="name" label="Imię i nazwisko" />
          <InputForm id="phone" label="Numer telefonu" />
          <InputForm id="email" label="Adres email" />
          <TextAreaForm id="message" label="Treść wiadomości" />
          <PrimaryButton dest="/" fontColor="black">
            Wyślij zapytanie
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
