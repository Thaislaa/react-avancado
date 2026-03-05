import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export async function getRepositories(userName: string) {
  try {
    const response = await api.get(`./users/${userName}/repos`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
