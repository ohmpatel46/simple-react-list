import React,{useState} from 'react';
import './Newgoal.css';
function Newgoal(props){
    const [inputtext,setInputText] = useState('');
    function addGoalHandler(event)
    {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text:inputtext 
        };
        setInputText('');
        props.onAddGoal(newGoal);
    };
    function textChangeHandler(event)
    {
        setInputText(event.target.value);
    }

    return(
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input placeholder="Enter your goal" value={inputtext} onChange={textChangeHandler} type="text"/>
        <button>Submit!</button>
    </form>
    );

};

export default Newgoal;