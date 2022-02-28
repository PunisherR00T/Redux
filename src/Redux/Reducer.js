import { ADDTASK, DEL, DONE } from "./Typeactions";

const initialState = {
  tasks: [
    { id: Math.random(), description: "Take shower", isDone: false },
    { id: Math.random(), description: "take notes", isDone: false }
  ]
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), description: action.payload, isDone: false }
        ]
      };
    case DEL:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    case DONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };

    default:
      return state;
  }
};

export default Reducer;

