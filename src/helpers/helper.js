import { v4 as uuidv4 } from "uuid";

function getRandom() {
  return Math.random();
}
export default function createContacts() {
  return {
    id: uuidv4(),
    text: getRandom(),
    completed: false,
  };
}
