import { FormProvider, useForm } from "react-hook-form";

type FormWrapperProps = {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
};

function FormWrapper({ children, onSubmit }: FormWrapperProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default FormWrapper;
