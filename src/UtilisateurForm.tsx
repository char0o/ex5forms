import React from "react";
import FormSectionInfos from "./FormSectionInfos";
import { Row, Col, Container } from "react-bootstrap";
import FormSectionAdresse from "./FormSectionAdresse";
import SelectionSection from "./SelectionSection";
import FormSectionConfirme from "./FormSectionConfirme";

export enum PagesFormulaire {
  INFO_PERSO,
  INFO_ADRESSE,
  INFO_CONFIRMATION,
}

export interface FormData {
  prenom: string;
  nom: string;
  sexe: string;
  accepteInfos: boolean;
  email: string;
  dateNaissance: string;
}

export interface FormSectionProps {
  nextPage?: () => void;
  previousPage?: () => void;
  changeFormData: (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => void;
  formData: FormData;
}

function UtilisateurForm() {
  const [page, setPage] = React.useState<PagesFormulaire>(
    PagesFormulaire.INFO_PERSO
  );

  const [formData, setFormData] = React.useState<FormData>({
    prenom: "",
    nom: "",
    sexe: "sexe-homme",
    accepteInfos: false,
    email: "",
    dateNaissance: "",
  });

  function changeFormData(
    key: keyof FormData,
    value: (typeof formData)[keyof FormData]
  ) {
    setFormData({ ...formData, [key]: value });
  }

  function nextPage() {
    if (page < PagesFormulaire.INFO_CONFIRMATION) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page > PagesFormulaire.INFO_PERSO) {
      setPage(page - 1);
    }
  }
  const pages: Record<PagesFormulaire, JSX.Element> = {
    [PagesFormulaire.INFO_PERSO]: (
      <FormSectionInfos
        nextPage={nextPage}
        changeFormData={changeFormData}
        formData={formData}
      />
    ),
    [PagesFormulaire.INFO_ADRESSE]: (
      <FormSectionAdresse
        nextPage={nextPage}
        previousPage={previousPage}
        changeFormData={changeFormData}
        formData={formData}
      />
    ),
    [PagesFormulaire.INFO_CONFIRMATION]: (
      <FormSectionConfirme
        previousPage={previousPage}
        changeFormData={changeFormData}
        formData={formData}
      />
    ),
  };

  return (
    <Container className="d-flex justify-content-center flex-column">
      <Row className="mx-auto">
        <SelectionSection page={page} setPage={(page: PagesFormulaire) => setPage(page)}/>
      </Row>
      <Row className="mx-auto">
        <Col>{pages[page]}</Col>
      </Row>
    </Container>
  );
}

export default UtilisateurForm;
