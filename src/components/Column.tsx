import React from "react";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <div className="column-container p-4 rounded-sm shadow bg-slate-300 max-w-sm">
      <div className="column-title text-lg font-bold">{text}</div>
      <Card text="Learn React" />
      <Card text="Learn Typescript" />
      <Card text="Learn Tailwind" />
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark />
    </div>
  );
};
