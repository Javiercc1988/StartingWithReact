import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me he vuelto a generar");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(10);
      }}
    >
      Incrementar
    </button>
  );
});
