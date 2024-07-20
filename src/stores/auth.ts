import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { auth /*userCollection*/ } from '@/plugins/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import type { User as FirebaseUser } from 'firebase/auth'
//import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { HOME_ROUTE, LOGIN_ROUTE } from '@/router'

export const useAuth = defineStore('auth', () => {
  const user = ref<FirebaseUser /*& Omit<Partial<User>, 'email'>*/ | null | undefined>(undefined)

  onAuthStateChanged(auth, async (u) => {
    if (!u) {
      user.value = null
      return
    }
    //const userDoc = await getDoc(doc(userCollection, u.uid))
    user.value = {
      ...u,
      //id: u.uid,
      //...userDoc.data(),
    }
  })

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    await signOut(auth)
  }

  const router = useRouter()

  watch(
    user,
    (user) => {
      if (user === undefined) return
      if (user) {
        if (router.currentRoute.value.path === LOGIN_ROUTE) router.push(HOME_ROUTE)
      } else {
        router.push(LOGIN_ROUTE)
      }
    },
    { immediate: true }
  )

  return {
    user,
    login,
    logout,
  }
})
