// src/components/GoalTracker.js
import React from 'react';

const GoalTracker = ({ goal, onToggle }) => (
  <div className="goal" onClick={() => onToggle(goal.id)}>
    <span>{goal.text}</span>
    <input type="checkbox" checked={goal.completed} readOnly />
  </div>
);

export default GoalTracker;
