/**
 * 统计一个数字在升序数组中出现的次数。
 */
function GetNumberOfK(data, k)
{
    if (data.length === 0) return 0
  //寻找下界
  //下界定义为：如果存在目标值，则指向第一个目标值，否则，如果不存在， 则指向大于目标值的第一个值
  let left = 0
  let right = data.length
  while (left < right) {
    let mid = left + Math.floor((right - left)/2)
    if (data[mid] < k) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  let start = left
  //寻找上界
  //上界定义为：不管目标值存在与否，都指向大于目标值的第一个值
  left = 0
  right = data.length
  while (left < right) {
    let mid = left + Math.floor((right - left)/2)
    if (data[mid] <= k) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  let end = right
  return end - start
}