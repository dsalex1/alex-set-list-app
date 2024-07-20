import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore'
import { getPerformance } from 'firebase/performance'
import { getAnalytics } from 'firebase/analytics'

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = initializeFirestore(app, { localCache: persistentLocalCache({}) })

//get performance and analytics infos collected
export const perf = getPerformance(app)
export const analytics = getAnalytics(app)

// const typedCollection = <T>(db: Firestore, col: string) => collection(db, col) as CollectionReference<T>

//export const userCollection = typedCollection<User>(db, 'users')

type FilteredKeys<T, U> = { [P in keyof T]: P extends U ? never : P }[keyof T]
export const withoutFields = <
  T extends Record<string, unknown>,
  Keys extends string[],
  Return = {
    [Key in FilteredKeys<T, Keys[number]>]: T[Key]
  }
>(
  obj: T,
  ...fields: Keys
): Return => {
  const copy = { ...obj }
  fields.forEach((field) => delete copy[field as keyof T])
  return copy as unknown as Return
}
