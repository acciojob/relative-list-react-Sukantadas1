import React from "react";

function RelativeList() {
  const relatives = [
    "Relative 1",
    "Relative 2",
    "Relative 3",
    // Add more relatives as needed
  ];

  return (
    <ol key="relativeList">
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
  );
}

export default RelativeList;
