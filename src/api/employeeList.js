import { api } from './'
  
export const employeeListApi = async(id) => {
  
  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
   
  return await api.get(`/nutemployee/`, config)
}
 