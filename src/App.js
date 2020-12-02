import React from "react";
import Button from "../src/components/button/Button";
import Task1 from "../src/components/tasks/task1/Task1";
import Task2 from "../src/components/tasks/task2/Task2";
import Task3 from "../src/components/tasks/task3/Task3";
import Task4 from "../src/components/tasks/task4/Task4";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button textButton="1" />
      <Button textButton="2" />
      <Button textButton="3" />
      <Button textButton="4" />
      <Button textButton="5" />
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
    </div>
  );
}
