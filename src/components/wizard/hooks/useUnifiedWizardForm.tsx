import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { unifiedWizardSchema, type UnifiedWizardFormData } from "../schemas";

export const useUnifiedWizardForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
    getValues,
  } = useForm<UnifiedWizardFormData>({
    resolver: zodResolver(unifiedWizardSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      city: "",
      postalCode: "",
      activities: [],
      street: "",
      postal: "",
      addressCity: "",
      country: "",
    },
  });

  const handleChange = (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (field === "activities") {
      const current = getValues("activities");
      const value = e.target.value;
      const checked = e.target.checked;
      
      setValue(field, checked 
        ? [...current, value] 
        : current.filter(item => item !== value)
      );
    } else {
      setValue(field, e.target.value);
    }
  };

  const validateStep = async (step: number): Promise<boolean> => {
    const stepFields = {
      0: ["firstName", "lastName", "email", "dob", "city", "postalCode"],
      1: ["activities"],
      2: ["street", "postal", "addressCity", "country"],
    } as const;

    const fields = stepFields[step as keyof typeof stepFields] || [];
    const results = await Promise.all(fields.map(field => trigger(field as keyof UnifiedWizardFormData)));
    return results.every(Boolean);
  };

  const onSubmit = (data: UnifiedWizardFormData) => {
    console.log("Wizard Complete:", data);
    alert("Form submitted successfully!");
  };

  return {
    formData: watch(),
    errors,
    handleChange,
    validateStep,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useUnifiedWizardForm; 