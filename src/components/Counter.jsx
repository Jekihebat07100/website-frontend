import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter Latihan</h2>
      <p className="count">{count}</p>
      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(0)} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;