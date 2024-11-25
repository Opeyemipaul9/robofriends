import React from "react";
import Card from "./card";

// const CardList = {robots} => {
//   const cardArray = robots.map((robot, i) => {
//     return (
//       <Card
//         key={i}
//         id={robots[i].id}
//         name={robots[i].name}
//         email={robots[i].email}
//       />
//     );
//   });
//   return <div>{cardArray}</div>;
// };

// export default CardList;

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
