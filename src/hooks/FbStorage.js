import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
/* ライブラリ */
import {
  addFirebaseItem,
  updateFirebaseItem,
  getFirebaseItems,
  clearFirebaseItem,
} from "../lib/firebase";

function useFbStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    const _items = await getFirebaseItems();
    setItems(_items);
  };

  const addItem = async (item) => {
    const newItem = { text: item.text, done: item.done };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
  };

  const updateItem = async (checked) => {
    const changes = { done: !checked.done };
    await updateFirebaseItem(changes, checked.id);
    const newItems = items.map((item) => {
      if (item.id === checked.id) {
        item = { ...item, changes };
      }
      return item;
    });
    setItems(newItems);
  };

  const clearItems = () => {
    items.map((item) => {
      clearFirebaseItem(item);
    });
    setItems([]);
  };

  return [items, addItem, updateItem, clearItems];
}

export const updateUser = async (user, image) => {
  try {
    const userDoc = await firebase
      .firestore()
      .collection("users")
      .doc(user.id)
      .get();
    if (userDoc.exists) {
      await firebase
        .firestore()
        .collection("users")
        .doc(user.id)
        .update({ ...userDoc.data(), image: image });
    }
  } catch (err) {
    console.log(err);
  }
};

export const uploadImage = async (image) => {
  const ref = firebase.storage().ref().child(`/images/${image.name}`);
  let downloadUrl = "";
  try {
    await ref.put(image);
    downloadUrl = await ref.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};
export default useFbStorage;
