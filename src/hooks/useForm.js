import React, {useState} from "react";

//custom hook giup lam viec voi form
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setError] = useState({});

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleBlur = (evt) => {
    const { value, name } = evt.target;
    if (!value) {
      setError((errors) => ({
        [name]: "This field is required",
      }));
    }
  };
  return { values, errors, handleChange, handleBlur };
}
