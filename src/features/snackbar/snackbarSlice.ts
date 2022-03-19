import { RootState } from 'app/store'
import {
  createEntityAdapter,
  createSelector,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import type { AlertColor } from '@mui/material'

type Snackbar = {
  id: string
  severity: AlertColor
  message: string
}

type Data = {
  message: string
}

const transformPaylaod = ({ message }: Data) => ({
  payload: {
    id: nanoid(),
    severity: 'info',
    message,
  } as Snackbar,
})

export const snackbarAdapter = createEntityAdapter<Snackbar>()

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: snackbarAdapter.getInitialState(),
  reducers: {
    snackbarAddedMany: {
      reducer: snackbarAdapter.addMany,
      prepare: (data) => data.map(transformPaylaod),
    },

    snackbarAdded: {
      reducer: snackbarAdapter.addOne,
      prepare: transformPaylaod,
    },

    snackbarRemoved: snackbarAdapter.removeOne,
  },
})

const selectSnackbar = (state: RootState) => state.snackbar

export default snackbarSlice.reducer
export const { snackbarAddedMany, snackbarAdded, snackbarRemoved } =
  snackbarSlice.actions

export const {
  selectById: selectSnackbarById,
  selectIds: selectSnackbarIds,
  selectTotal: selectSnackbarTotal,
} = snackbarAdapter.getSelectors(selectSnackbar)

export const selectFirstSnackbarId = createSelector(
  selectSnackbarIds,
  (ids) => ids?.[0]
)
