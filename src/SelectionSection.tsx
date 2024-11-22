import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { PagesFormulaire } from "./UtilisateurForm";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";

interface SelectionSectionProps {
  page: PagesFormulaire;
  setPage: (page: PagesFormulaire) => void;
}

function SelectionSection(props: SelectionSectionProps) {
  return (
    <Container className="d-flex my-2">
      <Container
        className="mx-2 d-flex align-items-center"
        onClick={() => props.setPage(PagesFormulaire.INFO_PERSO)}
        style={{ backgroundColor: props.page === PagesFormulaire.INFO_PERSO ? "lightgreen" : "lightblue" }}
      >
        <TbCircleNumber1 size={32}/>
        
        <span className="fs-4 pb-1" >Informations</span>
      </Container>
      <Container
        className="mx-2 d-flex align-items-center"
        onClick={() => props.setPage(PagesFormulaire.INFO_ADRESSE)}
        style={{ backgroundColor: props.page === PagesFormulaire.INFO_ADRESSE ? "lightgreen" : "lightblue" }}
      >
        <TbCircleNumber2 size={32}/>
        
        <span className="fs-4 pb-1" >Adresse</span>
      </Container>
      <Container
        className="mx-2 d-flex align-items-center"
        onClick={() => props.setPage(PagesFormulaire.INFO_CONFIRMATION)}
        style={{ backgroundColor: props.page === PagesFormulaire.INFO_CONFIRMATION ? "lightgreen" : "lightblue" }}
      >
        <TbCircleNumber3 className="m" size={32}/>
        
        <span className="fs-4 pb-1" >Confirmation</span>
      </Container>
    </Container>
  );
}

export default SelectionSection;
