import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const CoffeeCard = () => {
  const { categories } = useParams();
  const data = useLoaderData();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (categories) {
      const filteredByCategory = [...data].filter(
        (data) => data.category === categories
      );

      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, categories]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {coffees.map((coffee, idx) => (
          <Link key={idx} to={`/details/${coffee.id}`}>
            <Card coffee={coffee}></Card>
          </Link>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {[...data].slice(0, 6).map((coffeeObj, idx) => (
          <div key={idx} className="card bg-base-100  shadow-xl">
            <figure>
              <img
                src={coffeeObj.image}
                alt="Shoes"
                className="h-72 w-full object-cover rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {coffeeObj.name}</h2>
              <p>Category : {coffeeObj.category}</p>
              <p>Type : {coffeeObj.type}</p>
              <p>Origin : {coffeeObj.origin}</p>
              <p>Ratting : {coffeeObj.rating}</p>
              <p>Popular : {coffeeObj.popularity}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CoffeeCard;
