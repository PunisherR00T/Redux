import { ADDTASK, DEL, DONE } from "./Typeactions";

export const addTask = (payload) => {
  return {
    type: ADDTASK,
    payload
  };
};
export const del = (payload) => {
  return {
    type: DEL,
    payload
  };
};
export const done = (payload) => {
  return {
    type: DONE,
    payload
  };
};