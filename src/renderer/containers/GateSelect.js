import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './GateSelect.module.css';

export default function GateSelect(props) {
  const navigate = useNavigate();
  const [gates, setGates] = useState([]);

  useEffect(() => {
    props.api
      .fetchGates()
      .then((gates_) => setGates(gates_))
      .catch(console.error);
  }, []); // woof!

  const handleGateSelect = (e) => navigate(`/app/${e.target.value}`);

  return (
    <div>
      <div>Please select the gate number:</div>
      <select
        className={styles.select}
        defaultValue="-1"
        onChange={handleGateSelect}
      >
        <option value="-1" disabled>
          numbers
        </option>
        {gates.map((gate) => (
          <option key={gate.id} value={gate.id}>
            {gate.id} - {gate.number} {gate.gateName}
          </option>
        ))}
      </select>
    </div>
  );
}
