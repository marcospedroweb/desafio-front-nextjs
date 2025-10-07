import { create } from 'zustand'

export interface User {
  codigo_usuario: string,
  nome_usuario: string,
  codigo_grupo: string,
  nome_grupo: string
}

export interface Produto {
  codigo: string,
  nome: string,
  referencia: string,
  codigo_categoria: string,
  imagem: string,
  preco: string,
  descricao: string
}

interface UserState {
  user: string | null
  token: string | null
  login: (user: string, token: string) => void
  logout: () => void
  loadFromStorage: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
  loadFromStorage: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      set({ token, user })
    }
  },
}))