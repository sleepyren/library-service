import LibraryItem from './LibraryItem';
import PropTypes from 'prop-types';

function LibraryItemList({ itemList, onDelete, editStateFunc }) {
  //const [currList, setItemList] = useState(itemList);

  return (
    <div className="libraryItemList">
      {itemList.map((item) => (
        <LibraryItem
          key={item.isbn}
          item={item}
          onDelete={onDelete}
          editStateFunc={editStateFunc}
        ></LibraryItem>
      ))}
    </div>
  );
}

LibraryItemList.propTypes = {
  itemList: PropTypes.array,
  onDelete: PropTypes.func,
  editStateFunc: PropTypes.func,
};

export default LibraryItemList;
