import React from "react";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import {useAppState} from "../state/AppStateContext";
import { addTask } from "../state/actions";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <div className="column-container shadow h-full outline outline-stone-900 bg-slate-300 px-4 rounded-sm">
      <div className="column-title text-2xl pt-3 pl-2 font-bold">{text}</div>
     {tasks.map((task) => (
      <Card text={task.text} key={task.id} id={task.id}/>
     ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
         />
    </div>
  );
};
