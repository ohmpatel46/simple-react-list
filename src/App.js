import React,{useState} from 'react';
import './App.css';
import Goallist from './components/Goallist/list.js';
import Newgoal from './components/Newgoal/Newgoal.js';

function App() {
  const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1',text: 'Learn and apply ReactsJS'},
      {id: 'cg2',text: 'Get to know wtf is ExpressJS'},
      {id: 'cg3',text: 'Complete with NodeJS'}
  ]);


  
  function addNewGoalHandler(newGoal)
  {
     setCourseGoals(courseGoals.concat(newGoal));
    // setCourseGoals(function prevcourseGoals(){
    //   prevcourseGoals.concat(newGoal);
    // });
  };

  return (
      <div>
        <h2 className="course-goals" title="This is reactJS">Course Goals</h2>
        <Goallist goals={courseGoals}/>
        <Newgoal onAddGoal={addNewGoalHandler}/>
      </div>
  );
}
export default App;
