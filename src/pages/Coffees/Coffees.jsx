import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Coffees = () => {
  const allCoffees = useLoaderData();
  const [coffeesData, setCoffeesData] = useState([]);
  useEffect(() => {
    if (coffeesData.length === 0) {
      setCoffeesData(allCoffees);
    }
  }, [allCoffees, coffeesData]);

  const handleSortPop = () => {
    const sort = [...allCoffees].sort((a, b) => b.popularity - a.popularity);
    setCoffeesData(sort);
  };
  const handleByRatting = () => {
    const rating = [...allCoffees].sort((a, b) => b.rating - a.rating);
    setCoffeesData(rating);
  };
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-end justify-between ">
        <h2 className="font-thin text-3xl">
          Sort Coffees by Popularity & Rating-&gt;{" "}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={handleSortPop}
            className="btn bg-yellow-300 font-bold px-10 mt-10"
          >
            Sort By Popularity
          </button>
          <button
            onClick={handleByRatting}
            className="btn bg-yellow-300 font-bold px-10 mt-10"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {coffeesData.map((Coffee, idx) => (
          <Link key={idx} to={`/details/${Coffee.id}`}>
            <div className="card bg-base-100  shadow-xl">
              <figure>
                <img
                  src={Coffee.image}
                  alt="Shoes"
                  className="h-72 w-full object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {Coffee.name}</h2>
                <p>Category : {Coffee.category}</p>
                <p>Type : {Coffee.type}</p>
                <p>Origin : {Coffee.origin}</p>
                <p>Ratting : {Coffee.rating}</p>
                <p>Popular : {Coffee.popularity}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
