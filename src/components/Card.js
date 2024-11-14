import React from 'react';

const Card = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
  const priority = priorityLabels[ticket.priority] || 'Unknown Priority';

  return (
    <div className="card">
      <h3>{ticket.id} - {ticket.title}</h3>
      <p><strong>Priority:</strong> {priority}</p>
      <p><strong>User:</strong> {user?.name || 'Unknown'}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
    </div>
  );
};

export default Card;
