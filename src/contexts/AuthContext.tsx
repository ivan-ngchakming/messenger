import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth";
import { auth } from "../firebase";
import { createContext } from '../utils'

type AuthContextValues = {
  currentUser: User | null;
  login: (email: any, password: any) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const [useAuthContext, AuthContext] = createContext<AuthContextValues>()

export const useAuth = () => useAuthContext();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true)

  function login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
