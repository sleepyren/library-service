import { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const libraryServiceLink =
  import.meta.env.VITE_BACKEND_HOST + import.meta.env.VITE_BACKEND_PORT;
//options will have mode (Edit, Add) and (in edit mode)
//the original ISBN since it is an ID and it does not change
//and the classname for add or edit mode forms
function AddItemForm({ stateModifier, options, toggleForm }) {
  const [formText, setFormText] = useState({
    title: '',
    author: '',
    isbn: '',
    year_published: '',
  });

  const stateRef = useRef(formText);

  const [submittedCount, setSubmittedCount] = useState(0);
  //let submittedCount = 0;

  const onSubmit = function () {
    //submittedCount = submittedCount + 1;
    setSubmittedCount((curr) => curr + 1);
    //console.log(submittedCount)
  };
  const handleSubmit = useCallback(async function (
    formObj,
    options,
    stateModifier,
    toggleForm,
  ) {
    //const {title, author, isbn, year_published} = formObj;
    const response = await fetch(libraryServiceLink + '/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObj),
    });

    if (response.ok) {
      const readable = await response.json();
      stateModifier(readable);

      alert(options.mode + ' Successful');
      toggleForm();
    } else {
      alert(options.mode + ' Failed');
    }
  }, []);

  const onChange = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormText((state) => ({ ...state, [name]: value }));
  };

  // Update the ref whenever formText changes
  useEffect(() => {
    stateRef.current = formText;
  }, [formText]);

  useEffect(() => {
    if (options.mode == 'Edit') {
      setFormText((state) => {
        return { ...state, isbn: options.isbn.toString() };
      });
    }
  }, [options]);

  useEffect(() => {
    if (!submittedCount) return;
    //stateRef.current = formText;

    handleSubmit(stateRef.current);
  }, [submittedCount, handleSubmit, options, stateModifier, toggleForm]);

  return (
    <form onChange={onChange} className={options.className}>
      <h5>{options.mode} an entry!</h5>
      <label>
        {' '}
        Title
        <input type="text" name="title"></input> <br />
      </label>
      <label>
        {' '}
        Author
        <input type="text" name="author"></input>
        <br />
      </label>
      {options.mode == 'Add' && (
        <label>
          {' '}
          ISBN:
          <input type="text" name="isbn"></input> <br />
        </label>
      )}
      <label>
        {' '}
        Year Published:
        <input type="text" name="year_published"></input>
        <br />
      </label>
      <button type="button" onClick={onSubmit}>
        {options.mode}
      </button>
    </form>
  );
}
AddItemForm.propTypes = {
  stateModifier: PropTypes.func,
  options: PropTypes.object,
  toggleForm: PropTypes.func,
};
export default AddItemForm;
