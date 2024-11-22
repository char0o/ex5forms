import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormSectionProps } from "./UtilisateurForm";
import Container from "react-bootstrap/Container";
import { FormData } from "./UtilisateurForm";

function FormSectionInfos(props: FormSectionProps) {

  function onDataChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    
    if (id in props.formData) {
      props.changeFormData(id as keyof FormData, value);
    }
  }

  function onCheckboxChanged(event: React.ChangeEvent<HTMLInputElement>) {
    props.changeFormData("sexe", event.target.id);
  }

  return (
    <>
      <Form.Group className="my-2">
        <Form.Label>Adresse Courriel</Form.Label>
        <Form.Control
          type="email"
          placeholder="Entrez votre adresse courriel"
          id="email"
          onChange={onDataChanged}
          value={props.formData["email"] as string}
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Check
          type="switch"
          id="switch-accept-infos"
          label="Vous acceptez de recevoir des informations promotionelles."
          onChange={(e) => {props.changeFormData("accepteInfos", e.target.checked)} }
          checked={props.formData["accepteInfos"] === true}
        ></Form.Check>
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          id="prenom"
          placeholder="Entrez votre prénom"
          onChange={onDataChanged}
          value={props.formData["prenom"] as string}
        />
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez votre nom"
          id="nom"
          onChange={onDataChanged}
          value={props.formData["nom"] as string}
        />
      </Form.Group>
      <Form.Group className="my-2" >
        <Form.Label>Date de naissance</Form.Label>
        <Form.Control type="date" id="dateNaissance" value={props.formData["dateNaissance"] as string} onChange={onDataChanged}></Form.Control>
      </Form.Group>
      <Form.Group className="my-2">
        <Form.Label>Sexe</Form.Label>
        <Form.Check type="radio" id="sexe-homme" label="Homme" name="sexe" onChange={onCheckboxChanged} checked={props.formData.sexe === "sexe-homme"}/>
        <Form.Check type="radio" id="sexe-femme" label="Femme" name="sexe" onChange={onCheckboxChanged} checked={props.formData.sexe === "sexe-femme"}/>
        <Form.Check type="radio" id="sexe-autre" label="Autre" name="sexe" onChange={onCheckboxChanged} checked={props.formData.sexe === "sexe-autre"}/>
      </Form.Group>
      <Container className="d-flex justify-content-around">
        <Button className="my-2" variant="primary" onClick={props.nextPage}>
          Étape suivante
        </Button>
      </Container>
    </>
  );
}

export default FormSectionInfos;
