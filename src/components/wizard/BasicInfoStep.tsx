import MainCard from "./MainCard";
import ProfileSection from "./ProfileSection";
import BasicInfoFields from "./BasicInfoFields";
import FormButtons from "./FormButtons";
import type { useUnifiedWizardForm } from "./hooks/useUnifiedWizardForm";

interface BasicInfoFormProps {
  onNext: () => void;
  formHook: ReturnType<typeof useUnifiedWizardForm>;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext, formHook }) => {
  const { formData, errors, handleChange } = formHook;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <MainCard
      title="Let's start with the basic information"
      subtitle="Let us know your name and email address. Use an address you don't mind other users contacting you at"
    >
      <form onSubmit={handleSubmit}>
        <ProfileSection />
        <BasicInfoFields formData={formData} errors={errors} handleChange={handleChange} />
        <FormButtons label="Next" handleSubmit={() => handleSubmit} />
      </form>
    </MainCard>
  );
};

export default BasicInfoForm;
