
import {Column} from './components/Column';
import { AddNewItem } from './components/AddNewItem';

export const App = () =>{
  return <div className='bg-emerald-300 p-4'>
    <Column text="Todo:" />
    <AddNewItem
      toggleButtonText="+ Add another list"
      onAdd={console.log}
      dark={false}
    />
  </div>
}


