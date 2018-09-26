import React from "react";
// import "./StatusTable.css";

export const StatusTable = ({ data }) => {
  const listItems = [];
  for (let key in data) {
    //   const styles = {};
    //   if (key = fail) {
    //       //update styles
    //   }

    //   // more checks tp update stylign
    listItems.push(
      <li key={key}>
        {key}: {data[key]}
      </li>
    );
  }
  return <ul>{listItems}</ul>;
};
