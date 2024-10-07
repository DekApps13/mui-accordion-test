import * as z from "zod";

const beneficiary = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  status: z.string(),
});

export const schema = z.object({
  beneficiaries: z.array(beneficiary),
});
