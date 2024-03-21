// Pool.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Pool() {
  // Dummy data representing pool information
  const [poolInfo, setPoolInfo] = useState([
    {
      title: 'Pool Information',
      miners: '123',
      total_hashrate: 100,
      balance: '123',
      immature_balance: '123',
      unconfirmed_balance: '123',
      unit: 'BTC',
      block_mined: '123',
      reward: '123'
    }
  ]);
  const fetchPoolData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/api/data'); // Adjust endpoint URL as per your server
      setPoolInfo(response.data.data);
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
                {info.miners && (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Number of miners: {info.miners}
                    </li>

                    <li className="list-group-item">
                      Pool's Hashrate: {info.total_hashrate}
                    </li>

                    <li className="list-group-item">
                      Balance: {info.balance} {info.unit}
                    </li>

                    <li className="list-group-item">
                      Immature balance: {info.immature_balance} {info.unit}
                    </li>

                    <li className="list-group-item">
                      Unconfirmed balance: {info.unconfirmed_balance}{' '}
                      {info.unit}
                    </li>
                    <li className="list-group-item">
                      Total block mined: {info.block_mined}
                    </li>
                    <li className="list-group-item">
                      Total reward: {info.reward}
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
