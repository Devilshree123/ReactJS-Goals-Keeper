import React, {useState} from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal"

import './App.css'

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    {id:'1', text: 'Finish the Goals' },
    {id:'2', text: 'Learn all about the Course Main Topic' },
    {id:'3', text: 'Help other students in the Course Q & A' },
    {id:'4', text: 'My name is Shreyas' }
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));

    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    })
  }

  return(
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler} />           
      <GoalList goals = {courseGoals} />
    </div>
  );
};
  

export default App;