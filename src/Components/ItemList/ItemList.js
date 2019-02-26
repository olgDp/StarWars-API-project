import React from "react";
import PropTypes from "prop-types";
import "./ItemList.css";

const ItemList = props => {
  const renderItems = data => {
    return data.map(item => {
      const { id } = item;
      const [name, ...other] = props.children(item);

      return (
        <li
          key={id}
          className="ItemList list-group-item d-flex justify-content-between align-items-center"
          onClick={() => props.onItemSelected(id)}
        >
          <span>{name}</span>
          <span>
            {other.map(label => (
              <small key={label} className="text-secondary mr-2">
                {label}
              </small>
            ))}
          </span>
        </li>
      );
    });
  };

  const { data } = props;

  const items = renderItems(data);

  return <ul className="list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
