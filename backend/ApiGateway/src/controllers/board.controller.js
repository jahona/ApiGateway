const axios = require('axios');
const FormData = require('form-data');
const MESSAGES = require('../const/MESSAGES');

async function getBoardList(req, res) {
  try {
    const ret = await new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/api/board')
      .then(function(data) {
        resolve(data);
      })
      .catch(function(data) {
        reject(data);
      });
    });
    
    return res.status(200).send(ret.data);
  } catch (e) {
    console.log(e);
    return res.status(400).send(MESSAGES.ECONNREFUSED)
  }
}

async function getBoard(req, res) {
  var id = req.params.id;

  try {
    const ret = await new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/api/board/' + id)
      .then(function(data) {
        resolve(data);
      })
      .catch(function(data) {
        reject(data);
      });
    });
    
    return res.status(200).send(ret.data);
  } catch (e) {
    console.log(e);
    return res.status(400).send(MESSAGES.ECONNREFUSED)
  }
}

module.exports = {getBoardList, getBoard};