import PropTypes from "prop-types";
const CoffeeCard = ({ coffee }) => {
  const { name, category, type, origin, rating, popularity, image } = coffee;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-72 w-full object-cover rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Category : {category}</p>
        <p>Type : {type}</p>
        <p>Origin : {origin}</p>
        <p>Ratting : {rating}</p>
        <p>Popular : {popularity}</p>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};
export default CoffeeCard;
