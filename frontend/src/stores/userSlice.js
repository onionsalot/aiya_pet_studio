export const createUserSlice = (set) => ({
  user: null,
  setUser: (currentUser) => set(() => ({ user: currentUser }))
})
