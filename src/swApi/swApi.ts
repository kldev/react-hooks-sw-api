import Axios from 'axios';
import { Result, Person, Planet } from '../model';

const SW_API = `https://swapi.dev/api`;

const api = Axios.create({
  headers: {},
  validateStatus: () => {
    return true;
  }
});

const getSingle = async <T>(url: string): Promise<T> => {
  const response = await api.get<T>(`${url.replace('http://swapi.dev/api', 'https://swapi.dev/api')}`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as T;
};

export const SwApi = {
  getPeopleList: async (page: number = 1): Promise<Person[]> => {
    if (page < 1) page = 1;
    return await (await getSingle<Result<Person>>(`${SW_API}/people/?page=${page}`)).results;
  },

  getPeople: async (url: string): Promise<Person> => {
    return await getSingle<Person>(url);
  },

  getPlanet: async (url: string): Promise<Planet> => {
    return await getSingle<Planet>(url);
  }
};

export default SwApi;
