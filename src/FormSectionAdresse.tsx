import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormSectionProps } from "./UtilisateurForm";
import Container from "react-bootstrap/Container";
import { FormData } from "./UtilisateurForm";

function FormSectionAdresse(props: FormSectionProps) {
  function onDataChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id in props.formData) {
      props.changeFormData(id as keyof FormData, value);
    }
  }

  function onSelectChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target;

    if (id in props.formData) {
      props.changeFormData(id as keyof FormData, value);
    }
  }
  return (
    <>
      <Form.Group className="my-2">
        <Form.Label>Province</Form.Label>
        <Form.Select
          aria-label="Choisir la province"
          id="province"
          onChange={onSelectChanged}
        >
          <option value="QC">Québec</option>
          <option value="BC">Colombie-Britannique</option>
          <option value="AB">Alberta</option>
          <option value="MB">Manitoba</option>
          <option value="NB">Nouveau-Brunswick</option>
          <option value="NS">Nouvelle-Écosse</option>
          <option value="PE">Île-du-Prince-Édouard</option>
          <option value="NL">Terre-Neuve-et-Labrador</option>
          <option value="SK">Saskatchewan</option>
          <option value="NT">Territoires du Nord-Ouest</option>
          <option value="NU">Nunavut</option>
          <option value="YT">Yukon</option>
        </Form.Select>

        <Form.Text className="text-muted">
          Résident de l'Ontario allez à cette adresse:{" "}
          <a href="https://www.ontario.ca/">https://www.ontario.ca/</a>
        </Form.Text>
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Adresse</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez votre adresse"
          id="adresse"
          onChange={onDataChanged}
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Appartement</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez votre appartement"
          id="appartement"
          onChange={onDataChanged}
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Ville</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez votre ville"
          id="ville"
          onChange={onDataChanged}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Code postal</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez votre code postal"
          id="codePostal"
          onChange={onDataChanged}
        ></Form.Control>
      </Form.Group>
      <Container className="d-flex justify-content-around">
        <Button className="my-2" variant="warning" onClick={props.previousPage}>
          Étape précédente
        </Button>
        <Button className="my-2" variant="primary" onClick={props.nextPage}>
          Étape suivante
        </Button>
      </Container>
    </>
  );
}

export default FormSectionAdresse;
