import React, { useState } from "react";
import ReducedMat from "./ReducedMat";

function App() {
  //setting fields
  const [matSize, setSize] = useState(3);
  const [matrix, setMatrix] = useState([])

  // initialize matrix input
  const rows = [];



  // Configures input for a matrix (2d Array)
  for (let i = 0; i < matSize; i++) {
    var matrixCol = [];
    for (let j = 0; j <= matSize; j++) {
      var entryId = String(i) + String(j);
      matrixCol.push(
        <span>
          <input className="grid-input" type="text" key={entryId} id={entryId} size="4" />
        </span>
      );
    }
    rows.push(<div>{matrixCol}</div>);
  }

  // Converts user matrix input into array
  function makeMatrixArr() {
    var mat = [];
    for (let i = 0; i < matSize; i++) {
      var matrixCol = [];
      for (let j = 0; j <= matSize; j++) {
        var entryId = String(i) + String(j);
        var matEntry = document.getElementById(entryId).value;
        matrixCol.push(parseInt(matEntry));
      }
      mat.push(matrixCol);
    }
    renderMatrix(mat);
    console.log(matrix);
  }

  //TODO: render new matrix in reduced form
  function renderMatrix(matrix) {
    for (let i = 0; i < matSize; i++) {
      // find the largest row index to use for pivot
      var max_row = i;
      var max_pivot = matrix[max_row][i];

      for (let j = i + 1; j < matSize; j++) {
        if (Math.abs(matrix[j][i]) > max_pivot) {
          max_row = j;
          max_pivot = matrix[j][i];
        }
      }

      // a pivot col with all entries being 0 indicates a free variable and we skip over it
      if (max_pivot == 0) {
        continue;
      }

      // swap the current row with the row with the largest pivot
      if (max_row != i) {
        var temp = matrix[i];
        matrix[i] = matrix[max_row];
        matrix[max_row] = temp;
      }

      // go through each row, perform row operations to have all entries below pivot have a 0 entry
      for (let k = i + 1; k < matSize; k++) {
        // find ratio that reduces col entry to 0
        var ratio = parseFloat(matrix[k][i]) / matrix[i][i];
        

        // subtract ratio multiple of corresponding column element from curr i in curr k
        for (let currCol = i + 1; currCol <= matSize; currCol++) {
          matrix[k][currCol] -= ratio * matrix[i][currCol];
        }
        matrix[k][i] = 0;
      }
    }
    setMatrix(matrix);
  }
  

  return (
    <div>
      <div className="ui raised segment">
        <h1 className="header">AM NXN Augmented Matrix Reducer</h1>
        <h4 className="title-caption">
          because no one has time to reduce large matrices ;D
        </h4>
      </div>
      <div className="ui raised segment">
        <p className="how-to">
          Don't want to spend the time reducing matrices yourself? Use this tool
          to reduce your matrix for you! Simply input the size "n" to display an
          NxN matrix and fill in the entries!
          <br></br>
          (Note, size of the matrix will only fit up to your display.{" "}
          
          <span className="bold">Sorry O_O</span>)
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
              readOnly
              value="Set Matrix Size"
            ></input>
          </form>
        </div>
        <div className="container matrix">
          {rows}
          <input
            className="btn btn-dark btn-xl changeSizeButton reduce-margin"
            value="Reduce Matrix!"
            readOnly
            onClick={makeMatrixArr}
          ></input>
        </div>
        
      </div>
      <ReducedMat matrix={matrix}/>
    </div>
  );
}

export default App;
