import { useEffect } from 'react';

export const useLogger = value => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useLogger', value);
  }, [value]);
};
