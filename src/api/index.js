import axios from 'axios';

//Buscar uma key atuallizada em Crucrud.com
//Atualizada a cada 24 horas
const key = 'bff7372fbd0844aa97e0a1d87b597a62'

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${key}`,
});