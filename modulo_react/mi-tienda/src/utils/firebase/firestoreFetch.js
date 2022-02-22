import {
  query,
  where,
  collection,
  getDocs,
  updateDoc,
  increment,
} from "@firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "products"),
      where("categoryId", "==", idCategory)
    );
  } else {
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const updateStock = async (cartList) => {
  await cartList.forEach(async (item) => {
    const itemRef = doc(db, "products", item.id);
    await updateDoc(itemRef, { stock: increment(-item.count) });
  });
  return "update";
};

export const createOrderF = async (order) => {
  const newOrdr = doc(collection(db, "orders"));
  await setDoc(newOrdr, order);
  return newOrdr;
};
