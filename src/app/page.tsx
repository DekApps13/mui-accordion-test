"use client";

import * as React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { beneficiarySchema, Beneficiaries } from "./validations/validation";

import BeneficiaryAccordion from '@/components/BeneficiaryAccordion';

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
          status: "enabled",
        },
        {
          id: 2,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "disabled",
        },
        {
          id: 3,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "disabled",
        },
        {
          id: 4,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          status: "disabled",
        },
      ],
    }
  });

  return (
    <div className="grid justify-center h-full">
      <div className="bg-slate-400 w-96 sm:max-w-sm p-4">
        <BeneficiaryAccordion
          data={getValues("beneficiaries")[0]}
          control={control}
          disabled
        />
        <BeneficiaryAccordion
          data={getValues("beneficiaries")[1]}
          control={control}
          disabled
        />
        <BeneficiaryAccordion
          data={getValues("beneficiaries")[2]}
          control={control}
          disabled
        />
        <BeneficiaryAccordion
          data={getValues("beneficiaries")[3]}
          control={control}
          disabled
        />
      </div>
    </div>
  )
}

export default Page
