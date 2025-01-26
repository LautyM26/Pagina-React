import { app } from "./Config"
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })

    return products
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category))
    const products = []

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products
}

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("¡No existe tal documento!")
    }
}

export const createOrder = async (order) => {
   try {
    const docRef = await addDoc(collection(db, "orders"), order)
    return docRef 
  } catch (e) {
    console.error("Error en añadir documento: ", e)
    throw e;
  }
}