
import {Column} from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { listeners } from 'process';

export const App = () =>{
  const {lists} = useAppState();
  return <div className='bg-emerald-300 p-6 flex gap-4'>
    {
      lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id}/>
      ))
    }

  </div>
}


