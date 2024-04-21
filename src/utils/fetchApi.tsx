import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string): Promise<any> => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '32b97460famsh2b59096daf52a20p1aa4cfjsn85da915ab8eb',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}
