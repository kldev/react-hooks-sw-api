import { useState } from 'react';
import { SwApi } from 'swApi';
import { Person, Planet } from 'model';

export const useSwApi = () => {
  const [person, setPerson] = useState<Person>({} as Person);
  const [people, setPeople] = useState<Person[]>([]);
  const [planet, setPlanet] = useState<Planet>({} as Planet);

  const getSingleCharacter = (url: string) => {
    const call = async () => {
      const result = await SwApi.getPeople(url);
      setPerson(result);
    };

    call();
  };

  const getCharacterList = (page: number) => {
    const call = async () => {
      const result = await SwApi.getPeopleList(page);
      setPeople(result);
    };

    call();
  };

  const getPlanet = (url: string) => {
    const call = async () => {
      const result = await SwApi.getPlanet(url);
      setPlanet(result);
    };

    call();
  };

  return {
    person,
    getSingleCharacter,
    people,
    getCharacterList,
    planet,
    getPlanet
  };
};
