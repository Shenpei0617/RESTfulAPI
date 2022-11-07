const jwt = require('jsonwebtoken');
const myToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOjE1LCJhY2NvdW50IjoiQ2hhQ2hhIiwiaWF0IjoxNjY3ODA5MzI2fQ.VTkQlIqmckBMNUrM_MILKgwyMb-VXYWkr6z9mgbfO4U'

const payload = jwt.verify(
    myToken, 'aaaaaaaaabbbbbbbb');

console.log(payload)