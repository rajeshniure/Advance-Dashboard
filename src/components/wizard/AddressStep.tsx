import MainCard from "./MainCard";
import AddressInfoFields from "./AddressInfoFields";
import FormButtons from "./FormButtons";
import type { useUnifiedWizardForm } from "./hooks/useUnifiedWizardForm";

interface Props {
  onBack: () => void;
  onSubmit: () => void;
  formHook: ReturnType<typeof useUnifiedWizardForm>;
}

const AddressStep: React.FC<Props> = ({ onBack, onSubmit, formHook }) => {
  const { formData, handleChange } = formHook;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <MainCard
      title="Are you living in nice area?"
      subtitle="One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner"
    >
      <form onSubmit={handleSubmit}>
        <AddressInfoFields
          formData={formData}
          handleChange={handleChange}
        />
        <FormButtons label="Submit" handleSubmit={() => handleSubmit} handleBack={onBack} />
      </form>
    </MainCard>
  );
};

export default AddressStep;
