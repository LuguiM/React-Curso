import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"

export const NoteView = () => {
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
                <Typography fontSize={39} fontWeight='light'>05 de marzo, 2025</Typography>
            </Grid>
            <Grid>
                <Button variant="contained" endIcon={<SaveOutlined sx={{ fontSize: 30 }} />}>
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
                />
                <TextField type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    minRows={5}
                />

                {/* Image gallery */}
                <ImageGallery />
            </Grid>

        </Grid>
    )
}
