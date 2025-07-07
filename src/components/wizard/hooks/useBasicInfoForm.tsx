import { useState } from "react";
import schema from "../Schema";

const useBasicInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    city: "",
    postalCode: "",
    country: "",
    streetname: "",
    streetno: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));

      try {
        schema.pick({ [field]: true } as any).parse({ [field]: value });
        setErrors((prev) => ({ ...prev, [field]: "" }));
      } catch (err: any) {
        setErrors((prev) => ({
          ...prev,
          [field]: err.errors?.[0]?.message || "",
        }));
      }
    };

  const handleSubmit = () => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    console.log("✔ Valid data:", result.data);
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useBasicInfoForm;
