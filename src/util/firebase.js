import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

const userCartCollection = collection(db, "user_carts")

export async function updateFirestoreCart(updatedCart) {
  const userId = auth?.currentUser?.uid
  const userCartDoc = doc(userCartCollection, userId)

  // Use setDoc to update the existing document or create a new one
  await setDoc(userCartDoc, { products: updatedCart }, { merge: true })
  console.log("Cart data updated in Firestore.")
}

export async function fetchUserCart(userId) {
  const userCartDoc = doc(userCartCollection, userId)

  const userCartSnapshot = await getDoc(userCartDoc)
  console.log("firestore", userCartSnapshot)
  if (userCartSnapshot.exists()) {
    return { ...userCartSnapshot.data(), id: userCartSnapshot.id }
  }
  return { products: [] }
}
