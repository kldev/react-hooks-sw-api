import React, { useState } from 'react';
import { useCharacterList } from '../hooks';
import { Person } from '../model';

interface CharacterListProps {
  onSelected: (url: string) => void;
}

export const CharacterList: React.FC<CharacterListProps> = (props) => {
  const [page, setPage] = useState(1);

  const characters = useCharacterList(page);

  const handleClick = (person: Person) => {
    props.onSelected(person.url);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const renderCharacters = () => {
    return characters.map((person) => (
      <p>
        <span className="button button-outline" onClick={() => handleClick(person)}>
          {person.name}
        </span>
      </p>
    ));
  };

  return (
    <div>
      <h3>Characters</h3>

      {!characters.length ? 'Loading' : renderCharacters()}

      {characters.length ? (
        <div className="row">
          <span className="button button-outline" onClick={handlePrevClick}>
            Prev
          </span>
          <span className="button button-outline" onClick={handleNextClick}>
            Next
          </span>
        </div>
      ) : null}
    </div>
  );
};
