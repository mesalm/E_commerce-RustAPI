// const asyncHandler = require('express-async-handler');
// const Cart = require('../moudel/cartModule');
// const Product = require('../moudel/proudectModule');
// const User = require('../moudel/userModule')

// // إضافة عنصر إلى العربة
// const addItemToCart = asyncHandler(async (req, res) => {
//   const { productId, userId } = req.body;
//   console.log(productId, userId);

//   let cart = await Cart.findById({ userId});

//   if (!cart) {
//     cart = await Cart.create({ _id, items: [] });
//   }

//   const product = await Product.findById({productId});

//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

//   if (itemIndex > -1) {
//     cart.items[itemIndex].quantity += quantity;
//   } else {
//     cart.items.push({ productId, quantity });
//   }

//   await cart.save();
//   res.status(201).json(cart);
// });

// // // استعراض محتويات العربة
// // const getCart = asyncHandler(async (req, res) => {
// //   const userId = req.user._id;
// //   const cart = await Cart.findOne({ userId }).populate('items.productId');

// //   if (!cart) {
// //     res.status(404);
// //     throw new Error('Cart not found');
// //   }

// //   res.status(200).json(cart);
// // });

// // // تحديث عنصر في العربة
// // const updateCartItem = asyncHandler(async (req, res) => {
// //   const { productId, quantity } = req.body;
// //   const userId = req.user._id;

// //   const cart = await Cart.findOne({ userId });

// //   if (!cart) {
// //     res.status(404);
// //     throw new Error('Cart not found');
// //   }

// //   const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

// //   if (itemIndex > -1) {
// //     cart.items[itemIndex].quantity = quantity;
// //     await cart.save();
// //     res.status(200).json(cart);
// //   } else {
// //     res.status(404);
// //     throw new Error('Product not found in cart');
// //   }
// // });


// // const removeItemFromCart = asyncHandler(async (req, res) => {
// //   const { productId } = req.body;
// //   const userId = req.user._id;

// //   const cart = await Cart.findOne({ userId });

// //   if (!cart) {
// //     res.status(404);
// //     throw new Error('Cart not found');
// //   }

// //   const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

// //   if (itemIndex > -1) {
// //     cart.items.splice(itemIndex, 1);
// //     await cart.save();
// //     res.status(200).json(cart);
// //   } else {
// //     res.status(404);
// //     throw new Error('Product not found in cart');
// //   }
// // });

//  module.exports = addItemToCart
 