// formating the price number to look up to standard since the original price is without any format
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = () => {}
