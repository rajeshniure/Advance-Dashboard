

import MainCard from "../wizard/MainCard";
import ProfileSection from "../wizard/ProfileSection";

import BasicInfoFields from "./BasicInfoFields";
import FormButtons from "./FormButtons";
import useBasicInfoForm from "./hooks/useBasicInfoForm";

interface BasicInfoFormProps {
  handleNext: () => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ handleNext }) => {
  const { formData, errors, handleChange, handleSubmit } = useBasicInfoForm();

  return (
    <MainCard
      title="Let’s start with the basic information"
      subtitle="Let us know your name and email address. Use an address you don't mind other users contacting you at"
    >
      <form action="" onSubmit={handleSubmit}>
      <ProfileSection />
      <BasicInfoFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
      <FormButtons label="Next" handleNext={handleNext} />
      </form>
    </MainCard>
  );
};

export default BasicInfoForm;

