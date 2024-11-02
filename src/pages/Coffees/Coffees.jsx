import { useLoaderData } from "react-router-dom";

const Coffees = () => {
  const allCoffees = useLoaderData();
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-end justify-between ">
        <h2 className="font-thin text-3xl">
          Sort Coffees by Popularity & Rating-&gt;{" "}
        </h2>
        <div className="flex gap-3">
          <button className="btn bg-yellow-300 font-bold px-10 mt-10">
            Sort By Popularity
          </button>
          <button className="btn bg-yellow-300 font-bold px-10 mt-10">
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {allCoffees.map((Coffee) => (
          <div key={Coffee.id} className="card bg-base-100  shadow-xl">
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
        ))}
      </div>
    </div>
  );
};

export default Coffees;
