import React, { useEffect, useState } from 'react';
import './App.css';
import '../../pylon/server.js';

function App() {
  const [isIpv4, setIsIPv4] = useState(false);
  const [ipv6, setIpv6] = useState([]);
  const [ipv4, setIpv4] = useState([]);

  useEffect(() => {
    ipv6s()
  }, [])

  useEffect(() => {
    ipv4s()
  }, [])

  const ipv6s = async () => {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();

    setIpv6(data.ip)
  }

  const ipv4s = async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();

    setIpv4(data.ip)
  }

  function getIPv4(){
    if(!isIpv4){
      setIsIPv4(true);
    }
  }
  function getIPv6(){
    if(isIpv4){
      setIsIPv4(false);
    }
  }

  return (
    <div className="App">
      <header>Sextant</header>
      <div>
        <br></br>
        <header>Show me my:</header>
        <br></br>
        <button onClick={getIPv4}>IPv4</button>
        <button onClick={getIPv6}>IPv6</button>
        <br></br>
        {isIpv4 ? ipv4 : ipv6}
      </div>
    </div>
  );
}

export default App;
