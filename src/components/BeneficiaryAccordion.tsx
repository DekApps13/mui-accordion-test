import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField
} from "@mui/material";
import { Controller } from "react-hook-form";

import { Beneficiary } from "@/app/validations/validation";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type BeneficiaryAccordionProps =  {
  data: Beneficiary,
  control: any,
  disabled: boolean,
};

function BeneficiaryAccordion({ data, control, disabled }: BeneficiaryAccordionProps) {

  return (
    <Accordion
      key={data.id}
      disabled={disabled}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${data.id}-content`}
        id={`panel${data.id}-header`}
      >
        Agregar beneficiario
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1 } }}
          noValidate
          autoComplete="off"
          className="grid grid-cols-1 justify-stretch"
        >
          <Controller
            name={`beneficiary.${data.id}.firstName`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${data.id}.firstName`} label="Nombre" variant="filled" />
            )}
          />
          <Controller
            name={`beneficiary.${data.id}.lastName`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${data.id}.lastName`} label="Apellido" variant="filled" />
            )}
          />
          <Controller
            name={`beneficiary.${data.id}.phoneNumber`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${data.id}.phoneNumber`} label="Número de celular" variant="filled" />
            )}
          />

          <AccordionActions>
            <Button type="submit">Guardar</Button>
          </AccordionActions>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default BeneficiaryAccordion
