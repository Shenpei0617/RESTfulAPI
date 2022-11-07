const jwt = require('jsonwebtoken');

const str = jwt.sign({
    sid: 15,
    account: 'ChaCha'
}, 'aaaaaaaaabbbbbbbb');

console.log(str)