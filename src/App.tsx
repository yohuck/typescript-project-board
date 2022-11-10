
import {Column} from './components/Column';
import { AddNewItem } from './components/AddNewItem';

export const App = () =>{
  return <div className='bg-emerald-300 p-6 flex gap-4'>
    <Column text="On Deck:" />
    <Column text="Doing:" />
    <Column text="Done:" />

  </div>
}


