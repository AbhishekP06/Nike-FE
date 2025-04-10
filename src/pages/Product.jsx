import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { useGetAllProductsQuery } from '../app/service/productsData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/features/cartSlice';
import { toast } from 'react-toastify';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { productId } = useParams();
  const { data: products, isLoading, error } = useGetAllProductsQuery(productId);
  const dispatch = useDispatch();

  const product = products?.find((item) => item._id === productId);

  useEffect(() => {
    if (product?.img?.length) {
      setSelectedImage(product.img[0]);
    }
  }, [product]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
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
      <div className="flex flex-wrap justify-center p-5">
        <div className="relative pr-4">
          <div className="flex max-w-md md:flex-col gap-4 overflow-x-auto md:max-w-[100px] md:h-[550px] md:overflow-y-auto scrollbar-hide pr-2">
            {product?.img?.map((src, index) => (
              <img
                key={index}
                src={src}
                onClick={() => setSelectedImage(src)}
                className="rounded-xl w-24 h-24 shrink-0 object-cover"
                alt={`${product.name}-${index}`}
              />
            ))}
          </div>

          {/* Blur at bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full max-w-md object-contain rounded-2xl"
        />

        {/* Product Details */}
        <div className="p-5 max-w-md">
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-600">{product.type}</p>
          <p className="text-gray-600">{product.colors}</p>
          <p className="text-xl font-semibold mt-2">MRP: ₹ {product.price}</p>
          <p className="text-gray-600">Inclusive of all taxes</p>
          <p className="text-gray-600">(Also includes all applicable duties)</p>
          <button onClick={() => handleAddToCart(product)}
            className="mt-6 px-14 py-3 rounded-full bg-black text-white font-semibold text-lg flex items-center hover:bg-gray-400 transition-all cursor-pointer">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </>
  );
};

export default Product