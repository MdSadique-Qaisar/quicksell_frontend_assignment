import React from 'react';

const Header = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="header">
      <div className="dropdown">
        <label>Group By:</label>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="dropdown">
        <label>Sort By:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
