import React from 'react';
import { useGetCharacter } from '../hooks/useGetCharacter';
import { PlanetInfo } from './planet';

type PersonProps = {
  url: string;
};

export const Person: React.FC<PersonProps> = (props) => {
  const person = useGetCharacter(props.url);

  if (!person) return null;

  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <p>{person.gender}</p>
        <p>{person.birth_year}</p>
      </div>
      {person.homeworld ? <PlanetInfo url={person.homeworld} /> : null}
    </>
  );
};
