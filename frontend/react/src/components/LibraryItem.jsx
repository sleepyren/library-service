import { useState } from 'react';
import AddItemForm from './addItemForm';
import PropTypes from 'prop-types';

const LibraryItem = ({ item, onDelete, editStateFunc }) => {
  //destructuring
  const { title, author, isbn, year_published } = item;

  const [editStateBool, setEditStateBool] = useState(false);
  const activateEditMode = () => {
    setEditStateBool((state) => !state);
  };

  const options = { mode: 'Edit', isbn: isbn, className: 'EditForm' };
  const editForm = (
    <AddItemForm
      stateModifier={editStateFunc}
      options={options}
      toggleForm={activateEditMode}
    ></AddItemForm>
  );

  return (
    <div className="libraryItem">
      <h2>Title : {title} </h2>
      <h3>Written by {author} </h3>
      <h4>Published in {year_published} </h4>
      <h5>ISBN: {isbn} </h5>
      <button onClick={activateEditMode}>Edit</button>
      <button onClick={() => onDelete(isbn)} style={{ padding: '5px 10px' }}>
        Delete
      </button>
      {editStateBool ? editForm : undefined}
    </div>
  );
};

LibraryItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
  editStateFunc: PropTypes.func,
};

export default LibraryItem;
