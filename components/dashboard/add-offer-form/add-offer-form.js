"use client";

import css from "./add-offer-form.module.css";
import { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { createEditor, Transforms, Element, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import DashButton from "../dash-button/dash-button";

const formInputs = [
  {
    id: 1,
    title: "title",
    label: "Tytuł",
    type: "text",
  },
  {
    id: 2,
    title: "offerType",
    label: "Typ oferty",
    type: "text",
  },
  {
    id: 3,
    title: "location",
    label: "Lokalizacja",
    type: "text",
  },
  {
    id: 4,
    title: "ownershipType",
    label: "Rodzaj własności",
    type: "text",
  },
  {
    id: 5,
    title: "price",
    label: "Cena [zł]",
    type: "number",
  },
  {
    id: 6,
    title: "pricePerMeter",
    label: "Cena za m² [zł/m²]",
    type: "number",
  },
  {
    id: 7,
    title: "houseArea",
    label: "Powierzchnia domu [m²]",
    type: "number",
  },
  {
    id: 8,
    title: "landArea",
    label: "Powierzchnia działki [m²]",
    type: "number",
  },
  {
    id: 9,
    title: "rooms",
    label: "Liczba pokoi",
    type: "number",
  },
  {
    id: 10,
    title: "yearBuilt",
    label: "Rok budowy",
    type: "number",
  },
  {
    id: 11,
    title: "availabilityDate",
    label: "Termin dostępności",
    type: "date",
  },
];

const schema = yup
  .object({
    username: yup.string().required("Podaj nazwę użytkownika"),
    password: yup.string().required("Podaj hasło"),
  })
  .required();

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Tutaj wprowadź opis oferty..." }],
  },
];

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

const AddOfferForm = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  });

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css["inputs-container"]}>
          {formInputs.map((input) => (
            <div key={input.id} className={css["input-container"]}>
              <label htmlFor={input.title}>{input.label}</label>
              <input type={input.type} {...register(input.title)} />
            </div>
          ))}
        </div>
        <div className={css["description-container"]}>
          <label htmlFor="description">Opis oferty</label>
          <Slate editor={editor} initialValue={initialValue}>
            <Editable
              editor={editor}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return;
                }

                switch (event.key) {
                  case "b": {
                    event.preventDefault();
                    Editor.addMark(editor, "bold", true);
                    break;
                  }
                }
              }}
            />
          </Slate>
        </div>

        <div className={css["upload-photo-container"]}>
          <DashButton>DODAJ ZDJĘCIA</DashButton>
        </div>
        <DashButton>DODAJ OFERTĘ</DashButton>
      </form>
    </div>
  );
};

export default AddOfferForm;
