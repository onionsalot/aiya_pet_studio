export const createProductSlice = (set) => ({
  products: [],
  setProducts: (p) => set(() => ({ products: p }))
})
