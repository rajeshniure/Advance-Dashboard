import MainCard from "./MainCard";
import FormButtons from "./FormButtons";
import AccountFields from "./AccountFields";
import type { useUnifiedWizardForm } from "./hooks/useUnifiedWizardForm";

interface Props {
  onNext: () => void;
  onBack: () => void;
  formHook: ReturnType<typeof useUnifiedWizardForm>;
}

const AccountStep: React.FC<Props> = ({ onNext, onBack, formHook }) => {
  const { formData, handleChange } = formHook;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <MainCard
      title="What are you doing? (checkboxes)"
      subtitle="Give us more detail about what you're currently doing to improve your skills"
    >
      <form onSubmit={handleSubmit}>
        <AccountFields
          formData={formData}
          handleChange={handleChange}
        />
        <FormButtons label="Next" handleSubmit={() => handleSubmit} handleBack={onBack} />
      </form>
    </MainCard>
  );
};

export default AccountStep;
