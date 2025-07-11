import { Button } from '@mui/material';

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => (
  <Button type="submit" variant="contained" disabled={isLoading}>
    {isLoading ? 'Submitting...' : 'Send'}
  </Button>
);

export default SubmitButton; 