import { useEffect, useState} from 'react'

//options will have mode (Edit, Add) and (in edit mode)
//the original ISBN since it is an ID and it does not change
//and the classname for add or edit mode forms
function AddItemForm({stateModifier, options, toggleForm})
{
const [formText, setFormText] = useState({
    title:'',
    author:'',
    isbn:'',
    year_published:''
})



const [submittedCount, setSubmittedCount] = useState(0);
//let submittedCount = 0;


const onSubmit = function(event)
{
//submittedCount = submittedCount + 1;
setSubmittedCount( curr => curr+1)
//console.log(submittedCount)
}
const handleSubmit = async function(formObj)
{

    console.log(formObj);
    //const {title, author, isbn, year_published} = formObj;
    const response = await fetch("http://localhost:8080/save", {method : 'POST', headers : {"Content-Type" : "application/json"},
     body : JSON.stringify(formObj) })
     console.log(response);
     if (response.ok) 
        {const readable = await response.json();
        stateModifier(readable)
        console.log(readable);
        alert('Edit Successful')
        toggleForm()
     }
     else
     {
        alert('Edit Failed')
     }
}

const onChange = function(event)
{
const name = event.target.name;
const value = event.target.value;
setFormText((state) => ({...state, [name]:value}) );
}

useEffect(()=>{
        
    if (options.mode == 'Edit') 
        {
            console.log(options)
            setFormText((state)=>{
                console.log(state);
                return ({...state, isbn: options.isbn.toString()})});
        }
    
},[])

useEffect(()=>{

    console.log(submittedCount)
    if (!submittedCount) return;
    console.log(formText);
    handleSubmit(formText);
},[submittedCount]);


    

    return (<form onChange={onChange} className={options.className}>
        <h5>{options.mode} an entry!</h5>
        <label> Title
        <input type = 'text' name = 'title'></input> <br/>
        </label>
        <label> Author
        <input type = 'text' name = 'author'></input><br/>
        </label>
        {options.mode == 'Add' && <label> Written by:
        <input type = 'text' name = 'author'></input> <br/>
             </label>
            
        }
        <label> Year Published:
        <input type = 'text' name = 'year_published'></input><br/>
        </label>
        <button type="button" onClick={onSubmit}>{options.mode}</button> 
    </form>);
}

export default AddItemForm;