import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions";
import note from '../fountain-pen.png'

const Addtask = () => {
  const [inpt, setInpt] = useState("");
  const dispatch = useDispatch();
  return (
    <div id="inpt">
      <input value={inpt} onChange={(e) => setInpt(e.target.value)} />
      <img  id="pen" src={note} onClick={() => {inpt === ""
      ? alert("Empty input"):dispatch(addTask(inpt));setInpt("");}} alt="Verify Source" />
    </div>
  );
};

export default Addtask;
