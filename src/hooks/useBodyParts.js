import { useContext } from 'react';
import { BodyPartsContext } from '../context/BodyParts';

export const useBodyParts = () => useContext(BodyPartsContext);
