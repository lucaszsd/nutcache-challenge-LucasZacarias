import { api } from './'
  
export const deleteEmployeeApi = async(id) => {

  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
  
  return await api.delete(`/nutemployee${id}`, config)
}
 