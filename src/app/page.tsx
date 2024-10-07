import * as React from 'react';
import { TypeOf } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  TextField,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Page() {

  return (
    <div className="grid justify-center h-full">
      <div className="bg-slate-400 w-96 sm:max-w-sm p-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
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
              <TextField id="firstName" label="Nombre" variant="filled" />
              <TextField id="lastName" label="Apellido" variant="filled" />
              <TextField id="phoneNumber" label="Número de celular" variant="filled" />

              <AccordionActions>
                <Button type="submit">Guardar</Button>
              </AccordionActions>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </div>
  )
}

export default Page
