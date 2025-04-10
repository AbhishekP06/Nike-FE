import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGetAllspotlightQuery } from '../app/service/spotlightData';

function Spotlight() {

const { data, isLoading, error } = useGetAllspotlightQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

    return (
        <>
            <section>
                <p className="text-xl ml-8 p-8">Classics Spotlight</p>
            </section>
            <div className="cards flex overflow-x-auto ml-10 space-x-5">
                {data?.map((shoe) => (
                    <div key={shoe._id} className="border border-white max-w-xs m-5 text-center flex-none relative">
                        <NavLink to='/collection'>
                            <img className="w-full h-auto pb-6 bg-gray-100" src={shoe.image} alt="Shoe" />
                        </NavLink>
                        <div className=" absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl">
                            <h1 className='shoe-card'>{shoe.shoeType}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Spotlight