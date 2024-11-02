import PropTypes from "prop-types";

const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h2 className="text-4xl font-light">{title}</h2>
      <p className="text-xl font-thin">{description}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default Heading;
