import axios from 'axios';

//Buscar uma key atuallizada em Crucrud.com
//Atualizada a cada 24 horas
const key = '9fa24376a28c45c897bde88b1940f3ec'

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${key}`,
});