import { api } from './'
  
export const listEmployeeDetailApi = async() => {
  
  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
   
  return await api.get(`/nutemployee/`, config)
}
 