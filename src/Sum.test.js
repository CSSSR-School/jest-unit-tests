const sum = require('./sum')

describe('Sum function', () => {
  describe('Number operations', () => {
    it ('1+2=3', () => {
      expect(sum(1,2)).toBe(3)
    })
    it ('1.5+10=11.5', () => {
      expect(sum(1.5,10)).toBe(11.5)
    })
    it ('4+(-1)=3', () => {
      expect(sum(4,-1)).toBe(3)
    })
  })
  describe('Type conversion', () => {
    it('2+"1"', () => {
      expect(sum(2, "1")).toBe(3)
    })
  })
})
