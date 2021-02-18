import React, { useState, useCallback } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Counter text="Age" count={age} />
      <Button handleIncrement={incrementAge}>Increment Age</Button>
      <Counter text="Salary" count={salary} />
      <Button handleIncrement={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
