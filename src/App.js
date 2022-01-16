import React, { useState } from "react";

function App() {
  // setting background colour 
  document.body.style = "background: #828C6D;";
  
  //setting size field
  const [size, setSize] = useState(3);


  // initialize matrix input
  const rows = new Array();

  // Configures input for a matrix (2d Array)
  for (let i = 0; i < size; i++) {
    var matrixCol = new Array();
    for (let j = 0; j <= size; j++) {
      var entryId = String(i) + String(j);
        matrixCol.push(
          <span>
            <input type="text" id={entryId} size="4"/>
          </span>)
    }
    rows.push(<div>{matrixCol}</div>); 
  }

  // TODO: convert input to js matrix we can use to apply algo on
  function makeMatrix() {

  }
  
  return (
    <div>
      <h1 className="header">AM NXN Augmented Matrix Reducer</h1>
      <h4 className="title-caption">
        because no one has time to reduce large matrices ;D
      </h4>
      <p className="how-to">
        Don't want to spend the time reducing matrices yourself? Use this tool
        to reduce your matrix for you! Simply input the size "n"{" "}
        <span class="bold">up to a 23x23 grid</span> to display an NxN matrix
        and fill in the entries!
        <br></br>
        (Sorry, bootstrap doesn't allow sizing past 23{" "}
        <span class="bold">O_O</span>)
      </p>

      <div className="input-header container-fluid center">
        <form className="sizeForm">
          <label id="sizeQuestion">Want a BIGGER matrix?</label>
          <input type="text" id="sizeChange" />
          <input
            className="btn btn-dark btn-sm changeSizeButton"
            onClick={(e) =>
              setSize(document.getElementById("sizeChange").value)
            }
            value="Set Matrix Size"
          ></input>
        </form>
      </div>
      <div className="container matrix">
        {rows}
        <input className="btn btn-dark btn-xl changeSizeButton" value="Reduce Matrix!"
        onClick={makeMatrix}></input>
      </div>
    </div>
  );
}

export default App;
