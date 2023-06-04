import { getFirestore, collection,getDocs,query, where, addDoc, Timestamp } from "firebase/firestore";


export const getCollections = async (collections)=>{
    
    const db = getFirestore()
    const getColleccionCategorias = collection(db,collections);
    const result = await getDocs(getColleccionCategorias);           
      return result.docs.map((doc)=>(doc.data()));

};

export const getDocument = async (collectionName, field, value) => {
  
  const db = getFirestore();
  const collectionRef = collection(db, collectionName);

  const qq = query(collectionRef, where(field, "==", Number(value)));
  const querySnapshot = await getDocs(qq); 

  if (querySnapshot !== undefined && querySnapshot !== null) {
    const documento = querySnapshot.docs[0].data();    
    return documento;
  }

};

export const createOrder = async (customer,items,MontoTotal) =>{
  
  const Order = {
    buyer: { ...customer },    
    items: { ...items },
    total: MontoTotal,
    date:Timestamp.fromDate(new(Date))
  }

  const db = getFirestore();  
  const orderCollecction = collection(db,"orders");  

  return new Promise((resolve, reject) => {
    addDoc(orderCollecction, Order)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(error);
      });
  });



};