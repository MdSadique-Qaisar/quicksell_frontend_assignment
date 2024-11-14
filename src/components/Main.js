import React from 'react';
import Header from './Header';
import Column from './Column';

const Main = ({ tickets, users, groupBy, setGroupBy, sortBy, setSortBy }) => {
  const groupTickets = () => {
    if (groupBy === 'status') {
      return tickets.reduce((acc, ticket) => {
        const { status } = ticket;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    }

    if (groupBy === 'user') {
      return tickets.reduce((acc, ticket) => {
        const userName = users.find((user) => user.id === ticket.userId)?.name || 'Unknown User';
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    }

    if (groupBy === 'priority') {
      const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
      return tickets.reduce((acc, ticket) => {
        const priority = priorityLabels[ticket.priority];
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }
  };

  const groupedData = groupTickets();

  return (
    <div className="main">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      {Object.keys(groupedData).map((key) => (
        <Column key={key} title={key} tickets={groupedData[key]} users={users} sortBy={sortBy} />
      ))}
    </div>
  );
};

export default Main;
