import { useSwApi } from './useSwApi';
import { useCallback, useEffect } from 'react';

export const useCharacterList = (page: number = 1) => {
  const { people, getCharacterList } = useSwApi();
  const loadData = useCallback(getCharacterList, [page]);

  const load = useCallback(() => {
    loadData(page);
  }, [page, loadData]);

  useEffect(load, [page]);

  return people;
};
