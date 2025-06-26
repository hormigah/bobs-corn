import type { ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return children;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export {
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
  within,
  getByText,
  getByRole,
  getByLabelText,
  getByTestId,
  queryByText,
  queryByRole,
  queryByLabelText,
  queryByTestId,
  findByText,
  findByRole,
  findByLabelText,
  findByTestId,
  // add any other exports you need from '@testing-library/react'
} from '@testing-library/react';

export { describe, it, expect } from 'vitest';

export {customRender as render}