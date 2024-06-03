// src/components/PaymentMethods.jsx
import React, { useEffect, useState } from 'react';
import { fetchPayments } from '../api/api';

function PaymentMethods() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      try {
        const data = await fetchPayments();
        setPayments(data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    getPayments();
  }, []);

  return (
    <div className="PaymentMethods">
      <h1>Payments</h1>
      <ul>
        {payments.map((item, index) => (
          <li key={index}>{item.method}</li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentMethods;
