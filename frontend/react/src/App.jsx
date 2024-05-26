import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LibraryItem from './components/LibraryItem'
import LibraryItemList from './components/LibraryItemList'
import './App.css'
import AddItemForm from './components/addItemForm'


/*
NOTE: Do not pass in the current state to setState ever.
setState is an asynchronous operation that is handled by 
REACT env. Therefore the current state validity is not
guaranteed. If you pass a function into setState that takes
a parameter, REACT will guarantee that the parameter that is passed
into that function is the most recently updated version of
the state.
*/

//const inputList =  await getFromDatabase();

const libraryServiceLink = import.meta.env.VITE_BACKEND_HOST + import.meta.env.VITE_BACKEND_PORT;

function App() {

  let inputList;

  //REMOVE WHEN I BUILD TO PRODUCTION 

  //EXCERPT FROM : https://devtrium.com/posts/async-functions-useeffect
  //This must be done because the first argument of 
  //useEffect is supposed to be a function that returns 
  //either nothing (undefined) or a function (to clean up side effects). 
  //But an async function returns a Promise, which can't be called as a function! 
  //It's simply not what the useEffect hook expects for its first argument.

  const [itemList, setItemList] = useState([]);


  const getFromDatabase = async function(){
  const response = await fetch(libraryServiceLink + '/findall');

  const res = await response.json();

  setItemList(state => [...res]);
}
  /* NOTE: During REACT Strict Mode/Dev Mode every element is rendered twice 
  so that REACT can monitor the life cycle of every component.*/

  useEffect( () => {
getFromDatabase();

  
  } , []);
  const onDelete = async (isbn) => {
    //also remove from the backend database
    const response = await fetch(libraryServiceLink + "/delete", {method : 'POST', headers : {"Content-Type" : "text/plain"}, body : isbn.toString() })

      setItemList((state) => {
        console.log('state', state);
        const clone = [...state]
        return clone.filter(item => item.isbn !== isbn)
      });
    //setItemList(itemList.filter(item => item.isbn !== isbn ))
  }

    const addToState = function(item)
    {
      setItemList((state)=>{
        const clone = [item,...state];
        return clone;
      })

    }

    const editStateArray = function(item)
    {
      console.log('item', item);
      setItemList((state)=>{
        let clone = [...state]
        console.log('before filter', clone);

        console.log('item', item)
        clone = clone.filter(x => x.isbn !== item.isbn)
        console.log('after filter', clone);
        clone.push(item);
        return clone;
      })
    }


  const baseFormOptions = {mode:'Add', className: 'AddForm'}
  if (!itemList) return <div>Loading</div>;
  //put in the data
  return (
  <div>
    <LibraryItemList itemList={itemList} onDelete={onDelete}
    editStateFunc={editStateArray}>
  </LibraryItemList>
  <AddItemForm className = 'addItemForm' stateModifier={addToState}
  options={baseFormOptions}></AddItemForm>
    </div>
  )
}

export default App
