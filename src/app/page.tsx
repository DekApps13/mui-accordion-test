"use client";

import * as React from 'react';
import { TypeOf } from "zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { beneficiarySchema, Beneficiary } from "./validations/validation";
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
  const {
    control,
    getValues,
    setValue,
   } = useForm<Beneficiary>({
    mode: "all",
    resolver: zodResolver(beneficiarySchema),
    defaultValues: {
      beneficiaries: [
        {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
      ],
    }
  });

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
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField id="firstName" label="Nombre" variant="filled" />
                )}
              />

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
