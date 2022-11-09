import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);

    if(showForm){
        console.log('yellloooo')
    }

    return (
        <div className="py-2">
            <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>
        </div>
    )
}