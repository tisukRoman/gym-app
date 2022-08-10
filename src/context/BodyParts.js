import { createContext, useEffect, useState } from 'react';
import { api } from '../utils/api';

export const BodyPartsContext = createContext();

export const BodyPartsProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');

  useEffect(() => {
    async function loadBodyParts() {
      const data = await api.getBodyParts();
      console.log(data);
      setBodyParts(['all', ...data]);
    }
    loadBodyParts();
  }, []);

  return (
    <BodyPartsContext.Provider
      value={{
        bodyParts,
        selectedBodyPart,
        setSelectedBodyPart,
      }}
    >
      {children}
    </BodyPartsContext.Provider>
  );
};
