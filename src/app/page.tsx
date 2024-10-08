"use client";

import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { beneficiarySchema, Beneficiaries } from "./validations/validation";
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

type AccordionProps = {
  data: Beneficiaries,
  control: any,
};

function AccordionForm({ data, control }: AccordionProps): JSX.Element {
  const beneficiaries = data.beneficiaries;

  const accordionItems = beneficiaries.map(beneficiary => (
    <Accordion
      key={beneficiary.id}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${beneficiary.id}-content`}
        id={`panel${beneficiary.id}-header`}
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
            name={`beneficiary.${beneficiary.id}.firstName`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${beneficiary.id}.firstName`} label="Nombre" variant="filled" />
            )}
          />
          <Controller
            name={`beneficiary.${beneficiary.id}.lastName`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${beneficiary.id}.lastName`} label="Apellido" variant="filled" />
            )}
          />
          <Controller
            name={`beneficiary.${beneficiary.id}.phoneNumber`}
            control={control}
            render={({ field }) => (
              <TextField id={`beneficiary.${beneficiary.id}.phoneNumber`} label="Número de celular" variant="filled" />
            )}
          />

          <AccordionActions>
            <Button type="submit">Guardar</Button>
          </AccordionActions>
        </Box>
      </AccordionDetails>
    </Accordion>
  ))

  return (
    <div>{accordionItems}</div>
  );
}

function Page() {
  const {
    control,
    getValues,
    setValue,
  } = useForm<Beneficiaries>({
    mode: "all",
    resolver: zodResolver(beneficiarySchema),
    defaultValues: {
      beneficiaries: [
        {
          id: 1,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          id: 2,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          id: 3,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "creating",
        },
        {
          id: 4,
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
        <AccordionForm
          data={getValues()}
          control={control}
        />
      </div>
    </div>
  )
}

export default Page
