import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

// import PropTypes from "prop-types";
const CoffeeCard = () => {
  const { categories } = useParams();
  const data = useLoaderData();
  const [coffees, setCoffees] = useState();
  // console.log(coffeesData);
  console.log(coffees);
  useEffect(() => {
    const filteredByCategory = [...data].filter(
      (data) => data.categories === categories
    );
    setCoffees(filteredByCategory);
  }, [data, categories]);
  // const { name, category, type, origin, rating, popularity, image } = coffee;
  return (
    <div>
      <h2>Card.... {categories}</h2>
    </div>
  );
};
// CoffeeCard.propTypes = {
//   coffee: PropTypes.object,
// };
export default CoffeeCard;
