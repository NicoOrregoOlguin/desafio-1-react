
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tags = ({ text, color }) => (
  <span className={`badge bg-${color} mb-2`}>{text}</span>
);

export default Tags;