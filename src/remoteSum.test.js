const remoteSum = require('./calcRemoteSum')

jest.mock('./getRemoteNums')

describe('Remote Sum function', () => {
    it('calc by id with numbers', () => {
        return remoteSum(1).then(res => {
            expect(res).toBe(8)
        })
    })
    it('calc by id with number and string', () => {
        return remoteSum(2).then(res => {
            expect(res).toBe(5)
        })
    })
    it('calc by unknown id', () => {
        return remoteSum(3).catch(error => {
            expect(error.message).toBe('Unknown id')
        })
    })
})
