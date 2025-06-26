import { render, screen, expect } from '../../utils/test-utils'; // Adjust the import path as necessary
import BuyCornForm, { type BuyCornFormProps } from './BuyCornForm';

describe('BuyCornForm', () => {
  const defaultProps: BuyCornFormProps = {
    onSubmit: () => {},
  };

  test('renders a banner', () => {
    render(<BuyCornForm {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });
});