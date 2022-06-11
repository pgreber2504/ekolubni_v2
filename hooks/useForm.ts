import React from "react";

type FormDataType = {
  [key: string]: string;
};

const useForm = (
  initialState = {},
  onSubmit: (formData: FormDataType) => void
) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;
