import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Cards, Filters } from '@/types'

export interface HeroState {
  //Base collection is going to preserve an intact array of the cards that's not going to be affected by filters or anything
  baseCollection: Array<Cards>
  //Array of the cards information
  cards: Array<Cards>
  //List of tags to filter and tehir state (active or not)
  filters: Array<Filters>
}

const initialState: HeroState = {
  baseCollection: [],
  cards: [],
  filters: [
    {
      tag: 'AEM',
      checked: false,
    },
    {
      tag: 'Analytics',
      checked: false,
    },
    {
      tag: 'UX',
      checked: false,
    },
    {
      tag: 'Information Architecture',
      checked: false,
    },
    {
      tag: 'Visual Design',
      checked: false,
    },
    {
      tag: 'Sitecore',
      checked: false,
    },
    {
      tag: 'CX Strategy',
      checked: false,
    },
    {
      tag: 'Adobe DAM',
      checked: false,
    },
    {
      tag: 'Taxonomy',
      checked: false,
    },
    {
      tag: 'Photography',
      checked: false,
    },
    {
      tag: 'Adobe Analytics',
      checked: false,
    },
  ],
}

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setBaseCollection: (
      state,
      collectionArray: PayloadAction<Array<Cards>>
    ) => {
      state.baseCollection = collectionArray.payload
    },
    setCards: (state, action: PayloadAction<Array<Cards>>) => {
      state.cards = action.payload
    },
    setFilters: (state, action: PayloadAction<Array<Filters>>) => {
      state.filters = action.payload
    },
  },
})

export const { setBaseCollection, setCards, setFilters } = heroSlice.actions
export default heroSlice.reducer
