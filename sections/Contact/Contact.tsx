import React from "react";
import classes from "./Contact.module.scss";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import useForm, { FormDataType } from "../../hooks/useForm";

type ContactPropTypes = {
  id: string;
  title: string;
  description: string;
};

const Contact = ({ id, title, description }: ContactPropTypes) => {
  const submitData = (formData: FormDataType) => {
    console.log(formData);
  };
  const { formData, handleInputChange, handleSubmit } = useForm({}, submitData);

  const { name, email, message } = formData;

  return (
    <SectionWrapper id={id} title={title} description={description}>
      <div className={classes.contact}>
        <address className={classes.address}>
          <div>
            <h5>Eko Kontakt</h5>
            <h6>
              Zachęcamy do kontaktu <br />
              telefonicznego bądź mailowego:
            </h6>
            <AiOutlinePhone />
            <p>725-133-031</p>
            <AiOutlineMail />
            <p>ekolubni.warsztaty@gmail.com</p>
          </div>
        </address>
        <form className={classes["contact--form"]} onSubmit={handleSubmit}>
          <h5>Napisz do nas</h5>
          <Input
            name="name"
            type="text"
            value={name}
            label
            labelText="Imię i Nazwisko"
            onChange={handleInputChange}
          />
          <Input
            name="email"
            type="email"
            label
            labelText="Adres E-Mail"
            value={email}
            onChange={handleInputChange}
          />
          <Input
            name="message"
            type="textarea"
            label
            labelText="Twoja wiadomośc"
            value={message}
            onChange={handleInputChange}
          />
          <Button title="Wyślij" onClick={() => {}} />
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
