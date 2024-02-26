"use client";

import { sendMail } from "@/lib/send-mail";
import css from "./contact-form.module.css";

import InputForm from "./input-form/input-form";
import TextAreaForm from "./textarea-form/textarea-form";
import PrimaryButton from "@/components/general/primary-button/primary-button";

import { FormProvider, useForm } from "react-hook-form";

const ContactForm = () => {
  const methods = useForm();

  const onSubmit = (data) => sendMail(data);

  return (
    <div className={css.container}>
      <p className={css.title}>NAPISZ DO NAS</p>
      <div className={css["form-container"]}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputForm id="name" type="text" label="Imię i nazwisko" />
            <InputForm id="phone" type="number" label="Numer telefonu" />
            <InputForm id="email" type="text" label="Adres email" />
            <TextAreaForm id="message" label="Treść wiadomości" />
            <PrimaryButton fontColor="black">Wyślij zapytanie</PrimaryButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactForm;
