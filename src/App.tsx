
import {Column} from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { listeners } from 'process';
import { addList } from './state/actions';

export const App = () =>{
  const {lists, dispatch} = useAppState();
  return <div className='bg-emerald-300 p-6 flex gap-4'>
    {
      lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id}/>
      ))
    }
    <AddNewItem
      toggleButtonText="+ Add another list"
      onAdd={text => dispatch(addList(text))}
      dark
      />

  </div>
}


