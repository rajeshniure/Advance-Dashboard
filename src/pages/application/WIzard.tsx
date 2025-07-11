import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, } from 'react-hook-form';

import { accountSchema, addressSchema, basicInfoSchema, unifiedWizardSchema, type UnifiedWizardFormData } from '../../components/wizard/schemas';
import BasicInfoStep from '../../components/wizard/BasicInfoStep';
import AccountStep from '../../components/wizard/AccountStep';
import AddressStep from '../../components/wizard/AddressStep';
import HookStepForm, {type stepsTypes} from '../../components/stepform/HookStepForm';



const Wizard = () => {

  const steps : stepsTypes[] = [
    {
      element:<BasicInfoStep/>,
      schema:basicInfoSchema,
      label:"About"
    },
    {
      element:<AccountStep/>,
      schema:accountSchema,
      label:"Account"
    },
    {
      element:<AddressStep/>,
      schema:addressSchema,
      label:"Address"
    }
  ]
  const handleFormSubmit = (data: UnifiedWizardFormData) => {
    console.log('Form Submitted Successfully!');
    console.log('Complete Form Data:', data);
    alert('Form Submitted Successfully!');
    
  };


  const methods = useForm<UnifiedWizardFormData>({ resolver: zodResolver(unifiedWizardSchema) });


  const { formState: { isSubmitting } } = methods;


  return (
   <HookStepForm methods={methods} handleFormSubmit={handleFormSubmit} isSubmitting={isSubmitting} steps={steps}/>
  );
};

export default Wizard;
