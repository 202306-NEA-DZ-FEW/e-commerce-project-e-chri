import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
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
export const firestore = getFirestore(app)

// Define Firestore collections and documents where you want to store cart data
const userCartCollection = collection(firestore, "user_carts")

export async function updateUserCart(userId, cartData) {
  // Define the document for the user's cart
  const userCartDoc = doc(userCartCollection, userId)

  await setDoc(userCartDoc, cartData, { merge: true })
  console.log("User's cart data updated successfully.")
}
