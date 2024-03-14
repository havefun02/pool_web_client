// Miner.js
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Miner() {
  // Dummy data representing miner information
  const [minerInfo, setMinerInfo] = useState([
    {
      title: 'Hash Rate and Rewards',
      stats: {
        Week: { hashRate: '10 TH/s', rewards: '100 BTC' },
        Month: { hashRate: '50 TH/s', rewards: '500 BTC' },
        Year: { hashRate: '200 TH/s', rewards: '2000 BTC' }
      }
    }
  ]);

  const fetchMinerData = async () => {
    try {
      const response = await axios.get('127.0.0.1:3001/api/data/:id'); // Adjust endpoint URL as per your server
      setMinerInfo(response.data);
    } catch (error) {
      console.error('Error fetching miner data:', error);
    }
  };

  // Fetch miner data when component mounts
  useEffect(() => {
    fetchMinerData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {minerInfo.map((info, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                {info.stats && (
                  <ul className="list-group list-group-flush">
                    {Object.entries(info.stats).map(([period, data]) => (
                      <li key={period} className="list-group-item">
                        {period}: Hash Rate: {data.hashRate}, Rewards:{' '}
                        {data.rewards}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Miner;
