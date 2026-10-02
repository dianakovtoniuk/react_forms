import type { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
  error?: string | false;
}

export default function Input({ label, id, error, ...props }: InputProps) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}