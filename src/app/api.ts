import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export async function GET(
  address: string,
  params: Record<string, unknown> = {},

): Promise<unknown> {
  const response = await caller(
    'get',
    address,
    {
      params,
    },
  );
  return response.data;
}

export async function caller(
  method: string,
  address: string,
  params: Record<string, unknown> = {},
): Promise<{ data: unknown }> {
  // @ts-ignore
  return Api[method](address, params).catch(
    (error: Record<string, unknown>) => {
      if (error.response) {
        throw error.response;
      }
      throw error;
    }
  );
}
