'use'

const options = {
  style: "currency",
  currency: "INR",
};

const num=2000000;

const indianconvention = new Intl.NumberFormat('HND-IN',options).format(100000);

console.log(indianconvention);