import React from "react";

export type FormDataType = {
  [key: string]: string;
};

const useForm = (
  initialState: FormDataType = {},
  onSubmit: (formData: FormDataType) => void
) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;
