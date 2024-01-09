import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const allExtend = 'api/all'
const nameExtend = 'api/name/'

const getAll = () => {
    const request = axios.get(baseUrl+allExtend)
    return request.then(response => response.data)
}
const getOne = (name) => {
    const request = axios.get(baseUrl+nameExtend+name)
    return request.then(response => response.data)
}

export default { getAll, getOne}