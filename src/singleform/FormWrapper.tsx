import { FormProvider, useForm } from "react-hook-form";
import { LoginSchema, type LoginSchemaType } from '../Authcomp/LoginSchema' 
import { zodResolver } from "@hookform/resolvers/zod";


type FormWrapperProps = {
  children: React.ReactNode;
  onSubmit: (data: LoginSchemaType) => void;
};

function FormWrapper({ children, onSubmit }: FormWrapperProps) {
  const methods = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema)
   });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default FormWrapper;
