import React, { useEffect, useCallback } from 'react';
import { useSwApi } from 'hooks/useSwApi';
import { GenericInfo } from './GenericInfo';

interface PlanetProps {
  url: string;
}

export const PlanetInfo: React.FC<PlanetProps> = (props) => {
  const { planet, getPlanet } = useSwApi();

  const loadData = useCallback(getPlanet, [props.url]);

  const load = useCallback(() => {
    loadData(props.url);
  }, [props.url, loadData]);

  useEffect(load, [props.url]);

  return (
    <div>
      <GenericInfo title="Home world" data={planet} />
    </div>
  );
};
