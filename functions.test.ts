const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('shuffle array returns same length array', () => {
        const originalArr = [1, 2, 3, 4, 5]
        const shuffled = shuffleArray(originalArr)

        const originalLength = originalArr.length
        const shuffledLength = shuffled.length

        expect(shuffledLength).toEqual(originalLength)
      })
})