// useMemo hook in react
// it is mostly used for performance optimization

import { useState } from "react";

function About() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function updateCounter1() {
    setCounter1(counter1 + 1);
  }
  function updateCounter2() {
    setCounter2(counter2 + 1);
  }
  return (
    <>
      <button onClick={updateCounter1()}>counter1 = {counter1}</button>
      <button onClick={updateCounter2()}>counter2 = {counter2}</button>
    </>
  );
}

export default About;
