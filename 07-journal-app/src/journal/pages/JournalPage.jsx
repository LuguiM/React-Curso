
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {/* <Typography>Veniam consequat ipsum elit exercitation exercitation culpa reprehenderit consectetur commodo ex adipisicing est quis.</Typography> */}
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      {
        active === null 
        ? <NothingSelectedView />
        : <NoteView /> 
      }

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 34 }} />
      </IconButton>
    </JournalLayout>
  )
}
