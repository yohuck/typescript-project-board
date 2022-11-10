import { useState } from "react";
import { NewItemForm } from "./NewItemForm";

type AddNewItemProps = {
    onAdd(text: string): void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if(showForm){
       return (
              <NewItemForm onAdd={text => {
                onAdd(text);
                setShowForm(false);
              }} />
       )
    }

    return (
        <div className="py-2">
            <button className={`p-2 m-2 rounded-md ${dark ? "darkbtn" : 'lightbtn'}`} onClick={() => setShowForm(true)}>{toggleButtonText}</button>
        </div>
    )
}