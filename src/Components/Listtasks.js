import { useState } from "react";
import { useSelector } from "react-redux";
import Taskcard from "./Taskcard";
import '../App.css'
import Addtask from "./Addtask";

const Listtasks = () => {
  const [elyes, setElyes] = useState(3);
  const tasks = useSelector((state) => state.tasks);
  return (
    <div id="List">
      <aside>
      <img  className="select" src="https://cdn-icons-png.flaticon.com/512/3062/3062516.png"  onClick={() => setElyes(1)} alt="Verify Source"/>
      <img className="select" src='https://cdn-icons.flaticon.com/png/512/2278/premium/2278534.png?token=exp=1646085423~hmac=7e554c50b4e7b989a589fa4410559d92' onClick={() => setElyes(2)} alt="Verify Source"/>
      <img className="select" src="https://cdn-icons-png.flaticon.com/512/6944/6944580.png" onClick={() => setElyes(3)} alt="Verify Source"/>
      </aside>
      <br />
      <div id="Task">
      {elyes === 1
        ? tasks
            .filter((task) => task.isDone === true)
            .map((task) => <Taskcard task={task} />)
        : elyes === 2
        ? tasks
            .filter((task) => task.isDone === false)
            .map((task) => <Taskcard task={task} />)
        : tasks.map((task) => <Taskcard task={task} />)}

      {/* {tasks.map((task) => (
        <Taskcard task={task} />
      ))} */}
      </div>
      <Addtask />
    </div>
  );
};

export default Listtasks;