module.exports = function(id) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            if (id === 1) {
                resolve({
                    a: 2,
                    b: 6
                })
            } else if (id === 2) {
                resolve({
                    a: 3,
                    b: '2'
                })
            } else reject(new Error('Unknown id'))
        })
    })
}
