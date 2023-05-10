export const formatPrice = (number) => {
  const newNum = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((number / 100) * 50);

  return newNum;
};

export const getUniqueValues = () => {};
