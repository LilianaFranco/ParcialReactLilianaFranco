import { useState } from "react";
import { Card } from "../Card/Card";
import formStyle from "./Form.module.css";

export const Form = () => {
  //Object Status
  const [user, setUser] = useState({
    name: "",
    petName: "",
  });
  const [formError, setFormError] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  //Input behaviour to catch information
  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  //Functions to make input validations

  const validName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 3 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!validName(user.name)) {
      errors.name = "Tu nombre no es válido.";
    }
    if (user.petName.length < 6) {
      errors.petName = "La longitud del nombre de la mascota no es válida.";
    }
    setFormError({ ...errors });

    return Object.keys(errors).length < 1; //In order to know if there are errors
  };

  //Submit behaviour
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsLogged(true);
    }
    //Send form

    console.log("Data:", user);
  };

  //Send form. In this case will render card.

  return (
    <div>
      <form onSubmit={handleSubmit} className={formStyle.formBox}>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          className={formStyle.input}
          onChange={(e) => handleChange(e, "name")}
        />
        <span className={formStyle.noValid}>{formError.name}</span>
        <input
          type="text"
          name="petName"
          placeholder="Ingresa el nombre de tu mascota"
          className={formStyle.input}
          onChange={(e) => handleChange(e, "petName")}
        />
        <span className={formStyle.noValid}>{formError.petName}</span>
        <button type="text" className={formStyle.submitButton}>
          Registrar Mascota
        </button>
      </form>

      {isLogged && <Card name={user.name} petName={user.petName} />}
    </div>
  );
};
