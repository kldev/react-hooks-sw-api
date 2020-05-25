import React, { useState } from 'react';
import { CharacterList, Person } from './component';

function App() {
  const [url, setUrl] = useState('');

  const handleUrlSelected = (value: string) => {
    setUrl(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <CharacterList onSelected={handleUrlSelected} />
        </div>
        <div className="column"> {url ? <Person url={url} /> : null}</div>
      </div>
    </div>
  );
}

export default App;
