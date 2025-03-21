import { StarOutline } from "@mui/icons-material"
import { Grid2 as Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 5 }}
        >
            <Grid >
                <StarOutline sx={{fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid>
                <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
            </Grid>

        </Grid>
    )
}
