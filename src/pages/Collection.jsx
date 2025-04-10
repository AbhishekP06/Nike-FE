import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useGetAllProductsQuery } from '../app/service/productsData'
import { Link } from 'react-router-dom'

const Collection = () => {
  // const [data, setData] = useState([]);
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;
  
  return (
    <>
      <div className="m-5 flex flex-wrap justify-center gap-5">
        {data.map((shoe) => (
          <div key={shoe._id} className="border border-white max-w-[400px] p-4 rounded-lg">
            <Link to={`/product/${shoe._id}`}>
              <img className="w-full h-auto rounded-[30px]" src={shoe.image} alt="shoe" />
            </Link>
            <div className="font-lato font-light m-2">
              <h3 className="m-0 text-lg font-semibold">{shoe.name}</h3>
              <p className="m-0 pt-1 text-gray-500">{shoe.type}</p>
              <p className="m-0 pt-1 text-gray-500">{shoe.colors}</p>
              <p className="font-bold">MRP : ₹ {shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Collection