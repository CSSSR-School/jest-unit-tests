var http = require('http')

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        http.get(`my-server.com/numId=${id}`, res => {
            if (res.statusCode !== 200) {
                reject(new Error(`Error ${res.statusCode}: ${res.statusMessage}`))
            } else {
                res.setEncoding('utf8')
                let rawData = ''
                res.on('data', chunk => {
                    rawData += chunk
                })
                res.on('end', () => {
                    try {
                        const parsedRes = JSON.parse(rawData)
                        resolve(parsedRes)
                    } catch(e) {
                        reject(e)
                    }
                })
                res.on('error', (e) => {
                    reject(e)
                })
            }
        })
    })
}
