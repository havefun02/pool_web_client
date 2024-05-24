// Miner.js
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Miner() {
  // Dummy data representing miner information

  const [minerInfo, setMinerInfo] = useState({});

  // const fetchMinerData = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:3001/users/123'); // Adjust endpoint URL as per your server
  //     console.log(response);
  //     setMinerInfo(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching miner data:', error);
  //   }
  // };
  const searchMiner = async () => {
    try {
      const id = document.getElementById('userId').value;
      const response = await axios.get(`http://127.0.0.1:3001/users/${id}`); // Adjust endpoint URL as per your server
      console.log(response);
      setMinerInfo(response.data.data);
    } catch (error) {
      console.error('Error fetching miner data:', error);
    }
  };

  // Fetch miner data when component mounts
  useEffect(() => {
    // fetchMinerData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="">
            <input
              id="userId"
              // onChange={(e) => setMinerId(e.value)}
              placeholder="Search for miner id"
            ></input>
            <button onClick={() => searchMiner()}>Search</button>
          </div>
          <div key={minerInfo} className="card">
            <div className="card-body">
              <h5 className="card-title">Miner result</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {minerInfo
                    ? `Username: ${minerInfo.username}`
                    : 'Username:null'}
                </li>
                <li className="list-group-item">
                  {minerInfo
                    ? `Current target: ${minerInfo.target}`
                    : 'Current target:null'}
                </li>
                <li className="list-group-item">
                  {minerInfo
                    ? `Current hasrate: ${minerInfo.hashrate}`
                    : 'Current hasrate:null'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miner;
