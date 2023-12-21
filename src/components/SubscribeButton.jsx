"use client";
import React, { useState } from 'react';
import { Button } from '@tremor/react';
import jwt from 'jsonwebtoken';

const SubscribeButton = () => {
  const [loading, setLoading] = useState(false);
  const [snapUrl, setSnapUrl] = useState(null);

  const handleSubscribe = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    try {
      const decodedToken = jwt.decode(token);
      const userId = decodedToken?.userId;

      const response = await fetch('http://localhost:3005/transaction/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ user_id: userId }),  // Send userId in the request body
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Save the snapUrl in the state
      setSnapUrl(data.snapUrl);

      alert(`Token: ${data.token}, Snap URL: ${data.snapUrl}`);
    } catch (error) {
      console.error('Error during subscription:', error);
      alert('An error occurred while subscribing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleSubscribe} disabled={loading || snapUrl}>
        {loading ? 'Loading...' : 'Generate Payment Link'}
      </Button>
      {snapUrl && (
        <Button onClick={() => window.open(snapUrl, '_blank')}>
          Go to Payment Link
        </Button>
      )}
    </>
  );
};

export default SubscribeButton;