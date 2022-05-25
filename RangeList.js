/**
 * Check whether param range is valid
 * @typedef Range
 * @type {Array<number>}
 * @param {Range} range - Array of two integers that specify beginning and end of range.
 * @returns {boolean} 
 */
const checkRange = range => {
    if( !Array.isArray(range)) {
        return false
    }
    const [low, high] = range
    if (typeof low !== 'number' || typeof high !== 'number' || parseInt(low) !== low 
        || parseInt(high) !== high || !(high > low) ) {
      return false
    }
    return true
}
/**
 * @author chenhao
 * @description
 *  Implement a class named 'RangeList'
 * A pair of integers define a range, for example: [1, 5). This range
 * includes integers: 1, 2, 3, and 4.
 * A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,201)
 */
class RangeList {
  constructor() {
    this.list = []
  }

  /**
   * time complexity: O(n log n)
   * @static
   * @typedef Range
   * @type {Array<number>}
   * @param {Array.<Range>} origin - origin range array
   * @param {Range} newrange - the range to be merged
   * @returns {Array.<Range>} mutually exclusive range array
   *
   */
  static mergeRanges(origin, newrange) {
    let ranges = [...origin, newrange]
    // test if there are at least 2 ranges
    if (ranges.length <= 1) return ranges

    const stack = []
    let top
    // sort the ranges based on their start values
    ranges = ranges.sort(([a0], [b0]) => a0 - b0)

    // push the 1st range into the stack
    stack.push(ranges[0])

    // start from the next range and merge if needed
    for (let i = 1; i < ranges.length; i += 1) {
      // get the top element
      top = stack[stack.length - 1]

      // if the current range doesn't overlap with the
      // stack top element, push it to the stack
      if (top[1] < ranges[i][0]) {
        stack.push(ranges[i])
      }
      // otherwise update the end value of the top element
      // if end of current range is higher
      else if (top[1] < ranges[i][1]) {
        top[1] = ranges[i][1]
        stack.pop()
        stack.push(top)
      }
    }

    return stack
  }

  /**
   *
   * time complexity: M: times(range) N: count(ranges)  O(MN)
   * @static
   * @typedef Range
   * @type {Array<number>}
   * @param {Array<Range>} ranges - Array of range
   * @param {Range} range - Array of two integers that specify beginning and end of range.
   * @returns {Array.<Range>} mutually exclusive range array
   */
  static removeRange(ranges, range) {
    const [low, high] = range
    const rangesAfterRemove = []

    for (let i = 0, len = ranges.length; i < len; i += 1) {
      const [start, end] = ranges[i]
      if (start < low) {
        rangesAfterRemove.push([start, Math.min(low, end)])
      }
      if (end > high) {
        rangesAfterRemove.push([Math.max(start, high), end])
      }
    }

    return rangesAfterRemove
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    if(checkRange(range)){
        this.list = RangeList.mergeRanges(this.list, range)
    }
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    if(checkRange(range)){
        this.list = RangeList.removeRange(this.list, range)
    }
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    const content = this.list.map(([begin, end]) => `[${begin},${end})`).join(' ')
    console.log(content)
  }
}

// Example run
const rl = new RangeList()
rl.add([1, 5])
rl.print()
// Should display: [1, 5)

rl.add([10, 20])
rl.print()
// Should display: [1, 5) [10, 20)

rl.add([20, 20])
rl.print()
// Should display: [1, 5) [10, 20)

rl.add([20, 21])
rl.print()
// Should display: [1, 5) [10, 21)

rl.add([2, 4])
rl.print()
// Should display: [1, 5) [10, 21)

rl.add([3, 8])
rl.print()
// Should display: [1, 8) [10, 21)

rl.remove([10, 10])
rl.print()
// Should display: [1, 8) [10, 21)

rl.remove([10, 11])
rl.print()
// Should display: [1, 8) [11, 21)

rl.remove([15, 17])
rl.print()
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19])
rl.print()
// Should display: [1, 3) [19, 21)

rl.remove([4, 3])
rl.print()
// Should display: [1, 3) [19, 21)

rl.add([5.5, 6.5])
rl.print()
// Should display: [1, 3) [19, 21)

rl.remove(['a', 'b'])
rl.print()
// Should display: [1, 3) [19, 21)
