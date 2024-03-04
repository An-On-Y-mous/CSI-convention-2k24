import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
const collectionRef = collection(db, "convention-2k24");

const addEntry = async (options) => {
  try {
    await addDoc(collectionRef, options);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Rethrow the error to handle it in the caller function if needed
  }
};

export default addEntry;
