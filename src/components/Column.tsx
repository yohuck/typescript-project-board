import React from "react";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <div className="column-container p-4 bg-slate-300 max-w-sm">
        <div className="column-title text-lg font-bold">{text}</div>
        <div className="card-container bg-slate-100 m-1 p-1">Generate App Scaffold</div>
        <div className="card-container bg-slate-100 m-1 p-1">Learn TypeScript</div>
        <div className="card-container bg-slate-100 m-1 p-1">Begin to use static typing</div>
    </div>
  );
};
