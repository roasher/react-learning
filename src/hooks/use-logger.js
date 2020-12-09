import { useEffect } from 'react';

export const useLogger = (value) => {
  useEffect(() => {
    console.log('useLogger', value);
  }, [value]);
};
