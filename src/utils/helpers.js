// formating the price number to look up to standard since the original price is without any format
// 129999 → $1,299.99
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  // returning a new array with property of 'all' and adding the values coming from 'unique'
  return ['all', ...new Set(unique)]
}
