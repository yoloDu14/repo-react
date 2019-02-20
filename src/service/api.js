import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.100.88:8080/rtt-cbp-display/api-front/v1',
    timeout: 1000
});

export function login(username,password) {
    var bodyFormData = new FormData();
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);
    return new Promise(
        function(resolve,reject) {
            instance.post('/authenticate',
                bodyFormData
            )
                .then(function (response) {
                    resolve(response.data.tokenStr)
                    localStorage.setItem('token',response.data.tokenStr)
                })
                .catch(function (error) {
                    reject(error.response.data.message)
                });
        }
    );
}
