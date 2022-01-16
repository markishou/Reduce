import React from "react";

function ReducedMat({ matrix }) {
  console.log(matrix);
  var reducedMat = [];
  for (let i = 0; i < matrix.length; i++) {
    var matrixCol = [];
    for (let j = 0; j < matrix[0].length; j++) {
      matrixCol.push(
        <span>
          <input
            className="grid-input"
            type="text"
            value={matrix[i][j]}
            size="4"
          />
        </span>
      );
    }
    reducedMat.push(<div>{matrixCol}</div>);
  }

  return (
    <div className="ui segment">
      <div className="container">{reducedMat}</div>
    </div>
  );
}

export default ReducedMat;
