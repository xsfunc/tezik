import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseDialogProps } from './BaseDialog'
import { RootState } from 'app/store'

export type DialogTypes = 'Base' | 'AddContact'
export type DialogProps = null | BaseDialogProps

export interface DialogState {
  dialogType: DialogTypes | null
  dialogProps: DialogProps
}

const initialState: DialogState = {
  dialogType: null,
  dialogProps: null,
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    dialogOpened: (_, action: PayloadAction<DialogState>) => action.payload,
    dialogClosed: () => initialState,
  },
})

export default dialogSlice.reducer
export const { dialogOpened, dialogClosed } = dialogSlice.actions
export const selectDialog = (state: RootState) => state.dialog
export const selectDialogProps = (state: RootState) => state.dialog.dialogProps
