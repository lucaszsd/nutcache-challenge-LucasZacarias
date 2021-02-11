import { api } from './'
  
export const registerApi = async(name, birthDate, gender, email, CPF, startDate, team) => {

  const config = {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }
 
  const data = {
    name: name,
    email: email,
    birthDate: birthDate,
    gender: gender,
    email: email,
    CPF: CPF,
    startDate: startDate,
    team: team
  } 
  return await api.post('/nutemployee', data, config)
}
 