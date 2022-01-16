import React, { useState } from "react";

function App() {
  //setting fields
  const [matSize, setSize] = useState(3);
  var matrix = [];
  console.log(matrix);

  // initialize matrix input
  const rows = [];

  const reducedMat = [];

  // Configures input for a matrix (2d Array)
  for (let i = 0; i < matSize; i++) {
    var matrixCol = [];
    for (let j = 0; j <= matSize; j++) {
      var entryId = String(i) + String(j);
      matrixCol.push(
        <span>
          <input className="grid-input" type="text" id={entryId} size="4" />
        </span>
      );
    }
    rows.push(<div>{matrixCol}</div>);
  }

  // Converts user matrix input into array
  function makeMatrixArr() {
    matrix = [];
    for (let i = 0; i < matSize; i++) {
      var matrixCol = [];
      for (let j = 0; j <= matSize; j++) {
        var entryId = String(i) + String(j);
        var matEntry = document.getElementById(entryId).value;
        matrixCol.push(parseInt(matEntry));
      }
      matrix.push(matrixCol);
    }
    renderMatrix();
    console.log(matrix);
  }


  // Converts user matrix input into array
  function makeMatrixArr() {
    matrix = [];
    for (let i = 0; i < matSize; i++) {
      var matrixCol = [];
      for (let j = 0; j <= matSize; j++) {
        var entryId = String(i) + String(j);
        var matEntry = document.getElementById(entryId).value;
        matrixCol.push(parseInt(matEntry));
      }
      matrix.push(matrixCol);
    }
    renderMatrix();
    console.log(matrix);
  }

  //TODO: render new matrix in reduced form
  function renderMatrix() {
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

      // reduce all entries in row with pivot so pivot is 1
      var reducingRatio = 1.0 / matrix[i][i];
      for (let currCol = i; i <= matSize; currCol++) {
        matrix[i][currCol] = reducingRatio * matrix[i][currCol];
      }
    }
    console.log(matrix);
  }
  
  // if (matrix !== undefined || matrix.length > 0) {
  //   for (let i = 1; i < matSize; i++) {
  //     var matrixColumn = [];
  
  //     for (let j = 1; j <= matSize; j++) {
  //       let x = matrix[i][j]
  //       matrixColumn.push(
  //         <span>
  //           <button>
  //             toString(x);
  //           </button>
  //         </span>
  //         );
  //         console.log(matrix[i][j])
  //     }
  //     // reducedMat.push(<div>{matrixColumn}</div>);
  //   }
  // }
  

  

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
          Check console to find reduced matrix.
          <span class="bold">Sorry O_O</span>)
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
            onClick={makeMatrixArr}
          ></input>
        </div>
        
      </div>
      <div className="ui segment">
      </div>
    </div>
  );
}

export default App;
