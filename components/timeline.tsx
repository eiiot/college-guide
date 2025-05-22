import { Fragment } from "react";
export const Heading = () => {
  const list = ["Eat", "Sleep", "Repeat"];

  return (
    <>
      {list.map((item, i) => (
        <div key={i}>{`### ${item}`}</div>
      ))}
    </>
  );
};
