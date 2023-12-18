"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PolutionData = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data for each city ID
      const results = await Promise.all([1, 2, 3].map(cityId =>
        axios.get(`http://localhost:3005/polution/${cityId}`)
      ));

      // Combine the data from all responses into a single array
      const allData = results.flatMap(result => result.data.data);

      setData(allData);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item => {
    const itemDate = new Date(item.time);
    return itemDate.getDate() === startDate.getDate() &&
      itemDate.getMonth() === startDate.getMonth() &&
      itemDate.getFullYear() === startDate.getFullYear();
  });

  return (
    <div>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      {filteredData.map(item => (
        <div key={item.id}>
          <h2>City ID: {item.cityId}</h2>
          <h2>Polution: {item.polution}</h2>
          <h3>Case Respiratory: {item.caseRespiratory}</h3>
          <h4>Cost verif Respiratory: {item.costverifRespiratory}</h4>
        </div>
   ))}
    </div>
  );
};

export default PolutionData;