import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, removeFromCart, clearCart } from '../app/features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = parseInt(cart.subTotalPrice);
  const deliveryCharges = 1250;
  const total = subtotal + deliveryCharges;
  return (
    <>
      {cart.itemList.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
          <p className="text-xl font-semibold mb-4">Your bag is empty</p>
          <NavLink to="/collection">
            <div className="flex items-center gap-2 text-black hover:underline cursor-pointer">
              <svg
                height="24px"
                viewBox="0 0 512 512"
                width="24px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" />
              </svg>
              <span>Find your Kicks</span>
            </div>
          </NavLink>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-end justify-center text-center px-12">
            <NavLink to="/collection">
              <div className="flex items-center gap-2 text-black hover:underline cursor-pointer">
                <svg
                  height="24px"
                  viewBox="0 0 512 512"
                  width="24px"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                >
                  <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" />
                </svg>
                <span>Back</span>
              </div>
            </NavLink>
          </div>
          {/* Header */}
          <div className="flex items-center justify-center py-8">
            <h1 className="text-2xl font-light mr-2">Shopping Bag</h1>
            <svg
              viewBox="0 0 24 24"
              width="28px"
              height="28px"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5" />
            </svg>
          </div>

          <div className='flex flex-wrap justify-center'>
            {/* Cart Items */}
            <div className="flex flex-col gap-8 px-11">
              {cart.itemList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full py-4"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[200px] object-cover rounded-lg"
                    />
                  )}

                  {/* Description + Quantity */}
                  <div className="flex flex-col justify-between flex-1">
                    {/* Description */}
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-500">Price: ₹ {item.price}</p>
                      <p className="text-gray-600 font-semibold">Total: ₹ {item.totalPrice}</p>
                    </div>

                    {/* Quantity Controls (centered under description) */}
                    <div className="flex mt-4">
                      <div className="flex items-center border rounded-2xl px-3 gap-4">
                        <button className="p-1"
                          onClick={() => dispatch(removeFromCart({ _id: item._id }))}>
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          >
                            <path d="M13.75 10v7m-3.5-7v7m-3.5-8.5V17c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25V7.75h2.25m-10-3h3.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4.5" />
                          </svg>
                        </button>

                        <span>{item.quantity}</span>

                        <button className="p-1"
                          onClick={() => dispatch(addToCart(item))}>
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          >
                            <path d="M18 12H6m6 6V6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full max-h-fit max-w-sm bg-white rounded-md p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>₹ {subtotal}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Estimated Delivery & Handling</p>
                <p>₹ {deliveryCharges}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg mb-4">
                <p>Total</p>
                <p>₹ {total}</p>
              </div>
              <button onClick={() => dispatch(clearCart())}
                className="w-full bg-black text-white font-semibold py-3 rounded-full hover:opacity-80 transition cursor-pointer">
                Checkout
              </button>
            </div>

          </div>
        </>
      )}
    </>
  );
};

export default Cart;
