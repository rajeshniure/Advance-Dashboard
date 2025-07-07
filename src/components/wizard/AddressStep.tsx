import MainCard from "../wizard/MainCard";

import AddressInfoFields from "./AddressInfoFields";
import FormButtons from "./FormButtons";
import useBasicInfoForm from "./hooks/useBasicInfoForm";

const BasicInfoForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useBasicInfoForm();

  return (
    <MainCard
      title="Are you living in nice area?"
      subtitle="One thing I love about the later sunsets is the chance to go for a walk
through the neighborhood woods before dinner"
    >
        <form action="" onSubmit={handleSubmit}>
      <AddressInfoFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
      <FormButtons label="Send" handleSubmit={handleSubmit} />
      </form>
    </MainCard>
  );
};

export default BasicInfoForm;