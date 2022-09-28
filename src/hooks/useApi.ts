import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP
})

export const useApi = () => ({
    validadeToke: async(token:string) => {
        const response = await api.post('/validate', { token} )
    },
    signin: async(email:string,senha:string) => {
        return {
            user : { id: 3,name: 'aklysson', email: 'aklyoberto@hotmai.com'}
            ,token: '12345'
        }
        const response = await api.post('/signin', {email , senha})
        return response.data
    }
    ,
    logout: async() => {
        return {
            user:  null,
            token: null
        }
        const response = await api.post('/logout')
        return response.data
    }
})
