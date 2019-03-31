var getNums = require('./getRemoteNums')
var sum = require('./sum')

module.exports = function (id) {
    return new Promise((resolve, reject) => {
        getNums(id).then(res => {
            resolve(sum(res.a, res.b))
        }).catch(e => {
            reject(e)
        })
    })
}
