import { api } from '.'
 

export const registerApi = async(email, name, uid, code) => {
  
  config = {
    // headers: { Authorization: `Bearer ${token}` }
  }
  data = {
    email: email,
    name: name,
    firebase_uid: uid,
    recommended_by: code
  } 
  return await api.post('/register', data, config)
}