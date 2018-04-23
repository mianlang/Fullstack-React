/*
 * @file component Item
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ListItem({ item, onClick }) {
  const { time } = item;
  let formatTime = '未知时间';
  if (time) {
    [formatTime] = new Date(time).toISOString().match(/(\d{4}-\d{2}-\d{2})/);
  }
  return (
    <button
      href="#"
      className="list-group-item item-component"
      onClick={onClick}
    >
      <span className="label label-default label-pill pull-xs-right">
        {formatTime[1]}
      </span>
      <span className="item-title">{item.title}</span>
    </button>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
