import { Link as RouterLink } from "react-router";
import { TextField, Typography, Button, Link } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: 'luis@google.com',
  password: '123456',
  displayName: 'Luis Muñoz'
}

export const RegisterPage = () => {

  const { displayName,email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();


  }

  return (

    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid><Grid size={12} >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid size={{ xs: 12 }}>
            <Button fullWidth variant="contained" >Crear Cuenta</Button>
          </Grid>


        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login" >
            Ingresar
          </Link>
        </Grid>

      </form>
    </AuthLayout>


  )
}
