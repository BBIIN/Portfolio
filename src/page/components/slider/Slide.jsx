import Project1 from "@components/slider/project/project1";
import Project2 from "@components/slider/project/project2";
import Project3 from "@components/slider/project/project4";
import { useState } from "react";
import { Data } from "@components/slider/Data";
import Project4 from "@components/slider/project/project4";
import Project5 from "@components/slider/project/project5";
import Project6 from "@components/slider/project/project6";

function Slide() {
  let [active, setActive] = useState();

  const toggleActive = (e) => {
    const { name } = e.target;
    setActive(name);
  };

  const Components = {
    first: <Project1 />,
    second: <Project2 />,
    third: <Project3 />,
    four: <Project4 />,
    five: <Project5 />,
    six: <Project6 />,
  };

  return (
    <div id="project">
      <h1>PROJECT</h1>
      <div>
        {Data.map((data) => {
          return (
            <button onClick={toggleActive} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </div>
      {active && <div> {Components[active]}</div>}
    </div>
  );
}
export default Slide;
