import { useState } from 'react';
import { useFocus } from '../utils/useFocus';

type NewItemFormProps = {
    onAdd(text: string): void;
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            onAdd(text);
        }
    }

    return (
        <div className="p-2 flex justify-between">
            <input ref={inputRef} className='p-2 m-2 rounded-md'value={text} onKeyPress={handleAddText} onChange={e => setText(e.target.value)} />
            <button className='p-2 my-2 rounded-md border bg-emerald-500 border-emerald-800' onClick={() => onAdd(text)}>Add</button>
        </div>
    )
}