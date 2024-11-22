import React from "react";
import { FormSectionProps } from "./UtilisateurForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Text from "react-bootstrap/FormText";

function FormSectionConfirme(props: FormSectionProps) {
  return (
    <>
      <div className="mx-auto">
        {Object.entries(props.formData).map(([key, value]) => {
          return (
            <p>
              {key} : {value}
            </p>
          );
        })}
      </div>

      <Container className="d-flex justify-content-around">
        <Button className="my-2 mx-4" variant="warning" onClick={props.previousPage}>
          Étape précédente
        </Button>
        <Button className="my-2 mx-4" variant="success" onClick={props.nextPage}>
          Confimer
        </Button>
      </Container>
    </>
  );
}

export default FormSectionConfirme;
