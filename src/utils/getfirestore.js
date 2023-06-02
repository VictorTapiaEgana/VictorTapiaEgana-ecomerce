import { getFirestore, collection,getDocs,query, where,limit } from "firebase/firestore";


export const getCollections = async (collections)=>{
    
    const db = getFirestore()
    const getColleccionCategorias = collection(db,collections);
    const result = await getDocs(getColleccionCategorias);           
      return result.docs.map((doc)=>(doc.data()));

}

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