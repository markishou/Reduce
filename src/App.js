import React, { useState } from "react";

function App() {
  //setting fields
  const [size, setSize] = useState(3);
  var matrix = new Array();

  // initialize matrix input
  const rows = new Array();
  const renderedRows = new Array();

  // Configures input for a matrix (2d Array)
  for (let i = 0; i < size; i++) {
    var matrixCol = new Array();
    for (let j = 0; j <= size; j++) {
      var entryId = String(i) + String(j);
      matrixCol.push(
        <span>
          <input className="grid-input" type="text" id={entryId} size="4" />
        </span>
      );
    }
    rows.push(<div>{matrixCol}</div>);
  }

  function makeMatrix() {
    for (let i = 0; i < size; i++) {
      var matrixCol = new Array();
      for (let j = 0; j <= size; j++) {
        var entryId = String(i) + String(j);
        var matrEntry = document.getElementById(entryId).value;
        matrixCol.push(parseInt(matrEntry));
      }
      matrix.push(matrixCol);
    }
    renderedRows = renderMatrix(matrix);
    console.log(matrix);
  }

  //TODO: render new matrix in reduced form
  function renderMatrix(arr) {
    return new Array();
  }

  return (
    <div>
      <div className="ui raised segment">
        <h1 className="header">AM NXN Augmented Matrix Reducer</h1>
      </div>
      <div className="ui raised segment">
        <h4 className="title-caption">
          because no one has time to reduce large matrices ;D
        </h4>
        <p className="how-to">
          Don't want to spend the time reducing matrices yourself? Use this tool
          to reduce your matrix for you! Simply input the size "n"{" "}
          to display an NxN matrix
          and fill in the entries!
          <br></br>
          (Sorry, bootstrap doesn't allow sizing past 23{" "}
          <span class="bold">O_O</span>)
        </p>
        <div className="input-header container-fluid center">
          <form className="sizeForm">
            <label id="sizeQuestion">Want a BIGGER matrix?</label>
            <input className="size-input" type="text" id="sizeChange" />
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
        <input
          className="btn btn-dark btn-xl changeSizeButton reduce-margin"
          value="Reduce Matrix!"
          onClick={makeMatrix}
        ></input>
      </div>
      </div>
      
      <div className="container reduced-matrix">{renderedRows}</div>
    </div>
  );
}

export default App;
