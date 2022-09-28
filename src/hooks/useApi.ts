import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP
})

export const useApi = () => ({
    validadeToke: async(token:string) => {
        const response = await api.post('/validate', { token} )
    },
    signin: async(email:string,senha:string) => {
        const response = await api.post('/signin', {email , senha})
        return response.data
    }
    ,
    logout: async() => {
        const response = await api.post('/logout')
        return response.data
    }
})
