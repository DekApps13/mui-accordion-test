export type BeneficiaryStatus = "creating" | "saved" | "editing" | "enabled" | "disabled";

export type BeneficiaryForm = "enabled" | "disabled";

export type Beneficiary = {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  status: BeneficiaryStatus,
};

export type BaseComponent = {
  name: string,
  label: string,
  control: any,
}
