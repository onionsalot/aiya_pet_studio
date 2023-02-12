import { create } from 'zustand'
import { createUserSlice } from './userSlice'
import { createProductSlice } from './productSlice'
import { devtools } from 'zustand/middleware'

export const useBoundStore = create(
  devtools(
    (...a) => ({
      ...createUserSlice(...a),
      ...createProductSlice(...a),
    }),
    { name: 'bound-store' }
  )
)