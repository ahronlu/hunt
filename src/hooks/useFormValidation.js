import React, { useState } from "react";
import { toast } from "../utils/toast";

function useFormValidation(initialState, validate, action) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors) {
        action();
        setValues(initialState);
        setSubmitting(false)
      } else {
        toast(Object.values(erros).join(" "));
        setSubmitting(false);
      }
    }
    // es-disable-next-line
  }, [errors]);

  function handleChange(event) {
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit, handleChange, values, setValues, isSubmitting
  }
}

export default useFormValidation;