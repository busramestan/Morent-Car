"use client";

import React, { useState } from "react";
import transactions from "./TransactionData";
import TransactionItem from "./TransactionItem";
import './RecentTransaction.scss';

const RecentTransactions = () => {
  const [viewAll, setViewAll] = useState(false);
  const displayedTransactions = viewAll ? transactions : transactions.slice(0, 5);


  return (
    <div className="recent-transactions">
      <div className="recent-header">
        <h3>Recent Transactions</h3>
        <button className="view-all" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      {displayedTransactions && displayedTransactions.map((transaction, i) => {
        const isLastItem = i === displayedTransactions.length - 1; // Son öğe kontrolü
        return (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            borderActive={isLastItem} // Sadece son öğeye true gönderir
          />
        );
      })}
    </div>
  );
};


export default RecentTransactions;
 
