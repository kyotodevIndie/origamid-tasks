import React from "react";
import Button from "../button/Button";
import Task1 from "../tasks/task1/Task1";
import Task2 from "../tasks/task2/Task2";
import Task3 from "../tasks/task3/Task3";
import Task4 from "../tasks/task4/Task4";

export default function Dashboard() {
  return (
    <>
      <Button textButton="1" />
      <Button textButton="2" />
      <Button textButton="3" />
      <Button textButton="4" />
      <Button textButton="5" />
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
    </>
  );
}
