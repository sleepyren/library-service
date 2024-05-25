import React, { useState, useEffect } from 'react';
import LibraryItem from './LibraryItem';

function LibraryItemList({itemList, onDelete, editStateFunc}) {
//const [currList, setItemList] = useState(itemList);

return (<div className='libraryItemList'>
    {
    itemList.map(item => <LibraryItem key = {item.isbn} item = {item}
    onDelete={onDelete} editStateFunc={editStateFunc}></LibraryItem>)}
</div>);

}

export default LibraryItemList;

