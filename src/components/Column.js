import React from 'react';
import Card from './Card';

const Column = ({ title, tickets, users, sortBy }) => {
  const sortTickets = (tickets) => {
    if (sortBy === 'priority') {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    }
    if (sortBy === 'title') {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const sortedTickets = sortTickets(tickets);

  return (
    <div className="column">
      <h2>{title}</h2>
      {sortedTickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

export default Column;
