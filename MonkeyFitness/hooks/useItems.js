import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const querySnapshot = await getDocs(collection(db, "items"));
    const fetchedItems = [];
    querySnapshot.forEach((doc) => {
      fetchedItems.push({ id: doc.id, ...doc.data() });
    });
    setItems(fetchedItems);
  }

  async function addItem(name) {
    await addDoc(collection(db, "items"), { name });
    fetchItems();
  }

  return { items, addItem };
}
