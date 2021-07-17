import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const keyMaker = (key: string) => `qU&r0-þiZz@:${key}`; 

export function useLocalStorage<T = undefined>(
  key: string,
  value: T,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [state, setState] = useState<T | undefined>(() => {
    const storageValue = localStorage.getItem(keyMaker(key));

    return storageValue ? JSON.parse(storageValue) : value;
  });

  useEffect(() => {
    if (state) {
      localStorage.setItem(keyMaker(key), JSON.stringify(state));
    } else {
      localStorage.removeItem(keyMaker(key));
    }
  }, [key, state]);

  return [state, setState];
};
