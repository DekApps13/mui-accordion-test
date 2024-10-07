import { z, TypeOf } from "zod";

const beneficiary = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  status: z.string(),
});

export const beneficiarySchema = z.object({
  beneficiaries: z.array(beneficiary),
});

export type Beneficiary =  TypeOf<typeof beneficiarySchema>;
