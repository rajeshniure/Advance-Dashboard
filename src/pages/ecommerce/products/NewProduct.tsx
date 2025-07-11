import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, } from 'react-hook-form';

import HookStepForm, {type stepsTypes} from '../../../components/stepform/HookStepForm';
import ProductInfo from '../../../components/ecommerceComp/productscomp/ProductInfo';
import { mediaSchema, pricingSchema, productInfoSchema, socialSchema, unifiedSchema, type UnifiedFormData } from '../../../components/ecommerceComp/productscomp/schema';
import Media from '../../../components/ecommerceComp/productscomp/Media';
import Social from '../../../components/ecommerceComp/productscomp/Social';
import Pricing from '../../../components/ecommerceComp/productscomp/Pricing';



const NewProduct = () => {

  const steps : stepsTypes[] = [
    {
      element:<ProductInfo/>,
      schema:productInfoSchema,
      label:"Product Info"
    },
    {
      element:<Media/>,
      schema:mediaSchema,
      label:"Media"
    },
    {
      element:<Social/>,
      schema:socialSchema,
      label:"Social"
    },
   {
      element:<Pricing/>,
      schema:pricingSchema,
      label:"Pricing"
    }
  ]
  const handleFormSubmit = (data: UnifiedFormData) => {
    console.log('Form Submitted Successfully!');
    console.log('Complete Form Data:', data);
    alert('Form Submitted Successfully!');
    
  };


  const methods = useForm<UnifiedFormData>({ resolver: zodResolver(unifiedSchema) });


  const { formState: { isSubmitting,errors } } = methods;
  console.log(errors)


  return (
   <HookStepForm methods={methods} handleFormSubmit={handleFormSubmit} isSubmitting={isSubmitting} steps={steps}/>
  );
};

export default NewProduct;
