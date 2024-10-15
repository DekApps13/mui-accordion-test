import { BeneficiaryStatus } from "@/lib/types";
import { z, TypeOf } from "zod";

const beneficiary = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  status: z.custom<BeneficiaryStatus>(),
});

export const beneficiarySchema = z.object({
  beneficiaries: z.array(beneficiary).nonempty(),
});

export type Beneficiaries =  TypeOf<typeof beneficiarySchema>;
export type Beneficiary =  TypeOf<typeof beneficiary>;
