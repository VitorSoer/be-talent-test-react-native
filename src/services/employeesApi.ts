import axios, { AxiosResponse } from 'axios';

export interface IEmployees {
  id: number;
  name: string;
  job: string;
  phone: string;
  image: string;
  admission_date: string;
}

const api = axios.create({
  baseURL: 'https://673df4af0118dbfe860988d3.mockapi.io/api/v1/',
});

export const getEmployees = (): Promise<AxiosResponse<IEmployees[]>> => {
  return api.get('employees');
};
