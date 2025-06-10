import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firbaseConfig";

// Add data
export const sendData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    throw e;
  }
};

// Get all data
export const getData = async (collectionName) => {
  const allData = [];
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      allData.push({ ...doc.data(), id: doc.id });
    });
    return allData;
  } catch (error) {
    throw error;
  }
};

// Update data
export const updateData = async (collectionName, id, updatedContent) => {
  try {
    const lessonData = doc(db, collectionName, id);
    await updateDoc(lessonData, { content: updatedContent });
  } catch (error) {
    throw error;
  }
};

// Delete data
export const deleteData = async (collectionName, id) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (error) {
    throw error;
  }
};