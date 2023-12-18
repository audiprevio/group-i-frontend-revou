import { atom } from 'jotai';
import axios from 'axios';

// Atom to store the selected date
export const selectedDateAtom = atom(new Date());

// Atom to fetch and store the data from the API
export const apiDataAtom = atom(
  async (get) => {
    // Fetch data for each city ID
    const results = await Promise.all([1, 2, 3].map(cityId =>
      axios.get(`http://localhost:3005/polution/${cityId}`)
    ));

    // Combine the data from all responses into a single array
    const allData = results.flatMap(result => result.data.data);

    return allData;
  }
);

export const selectedCityDataAtom = atom(null);

export const selectedDateChangeAtom = atom(new Date());