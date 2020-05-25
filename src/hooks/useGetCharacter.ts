import { useEffect, useCallback } from 'react';
import { useSwApi } from './useSwApi';

export const useGetCharacter = (url: string) => {
  const { person, getSingleCharacter } = useSwApi();
  const loadData = useCallback(getSingleCharacter, [url]);

  const load = useCallback(() => {
    loadData(url);
  }, [url, loadData]);

  useEffect(load, [url]);

  return person;
};
