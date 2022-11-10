import React from "react";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <div className="column-container shadow h-full outline outline-stone-900 bg-slate-300 px-4 rounded-sm">
      <div className="column-title text-2xl pt-3 pl-2 font-bold">{text}</div>
      <Card text="Learn React" />
      <Card text="Learn Typescript" />
      <Card text="Learn Tailwind" />
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
         />
    </div>
  );
};
