import React, { useState, useEffect } from "react";

import GoalTracker from "./components/GoalTracker";
import ProgressBar from "./components/ProgressBar";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
function Medium() {
  const initialGoals = [
    { id: 1, text: "Workout for 20 mins", completed: false },
    { id: 2, text: "Read book for 15 mins", completed: false },
    { id: 3, text: "30 mins walk", completed: true },
    { id: 4, text: "Sleep at 11 sharp", completed: true },
    { id: 5, text: "Drink 3L water", completed: true },
  ];

  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : initialGoals;
  });

  const totalGoals = goals.length;
  const completedGoals = goals.filter((goal) => goal.completed).length;
  const progress = (completedGoals / totalGoals) * 100;

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleGoalToggle = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const handleTrackAll = () => {
    setGoals(goals.map((goal) => ({ ...goal, completed: true })));
  };

  return (
    <div className="App">
      <div className="dashboard">
        <h1>Your Daily Goal Almost Done</h1>
        <p>
          {completedGoals} of {totalGoals} Completed
        </p>
        <ProgressBar progress={progress} />
      </div>
      <div className="goals">
        {goals.map((goal) => (
          <GoalTracker key={goal.id} goal={goal} onToggle={handleGoalToggle} />
        ))}
      </div>
      <button onClick={handleTrackAll}>Swipe to track all</button>
    </div>
  );
}
export default Medium;
