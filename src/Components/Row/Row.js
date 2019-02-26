import React from "react";
import PropTypes from "prop-types";

const Row = ({ left, right }) => {
  return (
    <section className="row">
      <div className="col-md-6 mb-4 mb-md-0">{left}</div>
      <div className="col-md-6">{right}</div>
    </section>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
