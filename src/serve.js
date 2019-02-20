const axios = require('axios');

const url = "http://localhost:2000/api/";

const Axios = {
      getAllTasks: () => {
      return axios.get(url)
      .then(function (response){
          return response;
      })
      .catch(function (error) {
          return error;
      })
    },
    postTask: (body) => {
      return axios.post(url, body)
      .then(function (response){
          return response;
      })
      .catch(function (error) {
          return error;
      })
    },
    putTask: (id, body) => {
      return axios.put(`${url}${id}`, {"doneTask": body})
      .then(function (response){
          return response;
      })
      .catch(function (error) {
          return error;
      })
    },
    deleteTask: (id) => {
      return axios.delete(`${url}${id}`)
      .then(function (response){
          return response;
      })
      .catch(function (error) {
          return error;
      })
    }
}

  module.exports = Axios