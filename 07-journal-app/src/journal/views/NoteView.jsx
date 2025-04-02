import { Button, Grid2 as Grid, IconButton, TextField, Typography } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
        // dispatch(setActiveNote(formState))
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.file === 0) return;

        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1
            }}
        >

            <Grid>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button disabled={isSaving} onClick={onSaveNote} variant="contained" endIcon={<SaveOutlined sx={{ fontSize: 30 }} />}>
                    Guardar
                </Button>
            </Grid>

            <Grid container spacing={2} sx={{ width: '100%' }}>
                <TextField type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Titulo'
                    sx={{ border: 'none' }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container 
            sx={{
                justifyContent: 'end',
            }}
            >
            <Button 
                onClick={onDelete}
                sx={{mt:2}}
                color="error"
            >
                <DeleteOutline />
            </Button>
            </Grid>

            {/* Image gallery */}
            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
