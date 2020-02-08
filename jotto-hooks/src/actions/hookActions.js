import axios from 'axios';

export const getSecretWord = async setSecretword => {
  const response = await axios.get('http://localhost:3030');
  setSecretword(response.data);
};

export default {
  getSecretWord,
};
