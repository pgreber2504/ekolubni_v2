import React from "react";
import classes from "./Contact.module.scss";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

type ContactPropTypes = {
  id: string;
  title: string;
  description: string;
};

const Contact = ({ id, title, description }: ContactPropTypes) => {
  return (
    <SectionWrapper id={id} title={title} description={description}>
      <div className={classes.contact}>
        <address className={classes.address}>
          <div>
            <h5>Marta</h5>
            <AiOutlinePhone />
            <p>500-500-500</p>
            <AiOutlineMail />
            <p>test@test.com</p>
          </div>
          <div>
            <h5>Zosia</h5>
            <AiOutlinePhone />
            <p>500500500</p>
            <AiOutlineMail />
            <p>test@test.com</p>
          </div>
        </address>
        <form className={classes["contact--form"]}>
          <h5>Napisz do nas</h5>
          <Input
            name="name"
            type="text"
            value=""
            label
            labelText="Imię i Nazwisko"
            onChange={() => {}}
          />
          <Input
            name="email"
            type="email"
            label
            labelText="Adres E-Mail"
            value=""
            onChange={() => {}}
          />
          <Input
            name="message"
            type="textarea"
            label
            labelText="Twoja wiadomośc"
            value=""
            onChange={() => {}}
          />
          <Button title="Wyślij" onClick={() => {}} />
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
