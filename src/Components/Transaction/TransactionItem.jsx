import React from "react";

const TransactionItem = ({ transaction, borderActive = false }) => {
  return (
    <div className="transaction-item" style={borderActive === true ? { borderBottom: "none" } : {}}>
      <img src={transaction.image} alt={transaction.name} />
      <div className="recent-details">
        <h4>{transaction.name}</h4>
        <p>{transaction.type}</p>
      </div>
      <div className="right-info">
        <div className="info-date">{transaction.date}</div>
        <div className="info-price">{transaction.price}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
