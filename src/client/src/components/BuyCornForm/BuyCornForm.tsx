import { useState } from 'react';
import { Field } from '@base-ui-components/react/field';
import { Form } from '@base-ui-components/react/form';
import { buyCorn } from './utils';

export interface BuyCornFormProps {
  onSubmit: (email: string) => void;
}

const BuyCornForm = ({ onSubmit }: BuyCornFormProps) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <Form
      className="flex flex-col gap-4"
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        onSubmit(email);

        const response = await buyCorn(email);
        const serverErrors = {
          email: response.error,
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field.Root name="email" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-gray-900">
          Email
        </Field.Label>
        <Field.Control
          type="email"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:-outline-offset-1 focus:outline-blue-800"
        />
        <div className="h-10 w-full">
          <Field.Error className="text-sm text-red-800" />
        </div>
      </Field.Root>
      <button
        disabled={loading}
        type="submit"
        className="flex h-10 items-center justify-center rounded-md text-white border border-gray-200 bg-gray-50 px-3.5 text-base font-medium select-none hover:bg-gray-100 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
      >
        Submit
      </button>
    </Form>
  );
}

export default BuyCornForm;