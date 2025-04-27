import { useState, useEffect } from 'react';
import { getFirebaseDB } from '../utils/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirebaseDB();
      if (!db) return;

      const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
      const itemList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setItems(itemList);
    };

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
