import { useDispatch } from "react-redux";
import { del, done } from "../Redux/Actions";
import imgdel from '../remove.png'
import imgcheck from '../checked.png'
import '../App.css'

const Taskcard = ({ task }) => {
  const dispatch = useDispatch();
  return (
   
    <div >
      <h1 className={task.isDone ? "line" : task.isDone}>{task.description}</h1>
      <img src={imgdel} onClick={() => dispatch(del(task.id))} alt='Verify Source'/>
      <img src={imgcheck} onClick={() => dispatch(done(task.id))} alt='Verify Source'/>
    </div>
    
  );
};

export default Taskcard;
