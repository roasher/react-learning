import { useState } from 'react';

export const useInput = (initialValue = '') => {
  const [state, setState] = useState(initialValue);
  return { value: state, onChange: (event) => setState(event.target.value) };
};
