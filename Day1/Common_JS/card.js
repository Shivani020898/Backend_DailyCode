const home = require("./home");

const cart = (price) => {
  console.log(`cart total value is ${price}`);
};
cart(2000);
module.exports = cart;
home();
