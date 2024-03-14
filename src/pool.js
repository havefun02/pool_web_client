// Pool.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Pool() {
  // Dummy data representing pool information
  const [poolInfo, setPoolInfo] = useState([
    {
      title: 'Pool Information',
      numberOfMiners: 50,
      numberOfActiveMiners: 40,
      numberOfInactiveMiners: 10
    },
    {
      title: 'Hash Rate',
      hashRate: {
        '2 Hours': '10 TH/s',
        Week: '100 TH/s',
        Total: '5000 TH/s'
      }
    },
    {
      title: 'Mining Statistics',
      stats: {
        Week: { blocksMined: 50, rewards: '100 BTC' },
        Total: { blocksMined: 2000, rewards: '5000 BTC' }
      }
    }
  ]);
  const fetchPoolData = async () => {
    try {
      const response = await axios.get('127.0.0.1:3001/api/pool'); // Adjust endpoint URL as per your server
      setPoolInfo(response.data);
    } catch (error) {
      console.error('Error fetching pool data:', error);
    }
  };

  // Fetch pool data when component mounts
  useEffect(() => {
    fetchPoolData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {poolInfo.map((info, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                {info.hashRate && (
                  <ul className="list-group list-group-flush">
                    {Object.entries(info.hashRate).map(([period, rate]) => (
                      <li key={period} className="list-group-item">
                        {period}: {rate}
                      </li>
                    ))}
                  </ul>
                )}
                {info.stats && (
                  <ul className="list-group list-group-flush">
                    {Object.entries(info.stats).map(([period, data]) => (
                      <li key={period} className="list-group-item">
                        {period}: Blocks Mined: {data.blocksMined}, Rewards:{' '}
                        {data.rewards}
                      </li>
                    ))}
                  </ul>
                )}
                {info.numberOfMiners && (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Number of Miners: {info.numberOfMiners}
                    </li>
                    <li className="list-group-item">
                      Number of Active Miners: {info.numberOfActiveMiners}
                    </li>
                    <li className="list-group-item">
                      Number of Inactive Miners: {info.numberOfInactiveMiners}
                    </li>
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

export default Pool;
