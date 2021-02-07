import React from 'react';
import './list.css';
function Goallist(props){
    return (
        <ul className="goal-list">
            {
                props.goals.map((goal) =>
                {
                    return <li key={goal.id}>{goal.text}</li>;                
                })
            }
        </ul>
    );
};

export default Goallist;