import React, { useState, useEffect } from "react";
import styles from "./style.css";
import GridInput from './gridInput';

function App() {
  const [matrix, setMatrix] = useState([]);
  const [size, setSize] = useState(3);

  function gaussianElimination() {}

  return (
    <div>
      <h1 class="header">AM NXN Augmented Matrix Reducer</h1>
      <div className="input-header container-fluid center">
        <div className="inputs">
          <form>
            <div>
              <label id="sizeQuestion" class="changeSizeField" for="sizeChange">Want a bigger matrix? </label>
              <input class="changeSizeField" id="sizeChange" type="text" name="text"></input>
              <input class="changeSizeField" type="submit" value="Update Matrix"></input>
            </div>
          </form>
        </div>
      </div>
      <GridInput size={size}/>
    </div>
  );
}

export default App;
