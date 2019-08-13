import request from './request'

const api = {
    login: async () => {return request({url: '', method: 'post', data: {username: '', password: ''}})},
    getList: async () => {return request({url: '', method: 'get', params: {username: '', password: ''}})}
};
export default api;
