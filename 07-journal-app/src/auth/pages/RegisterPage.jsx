import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router";
import { TextField, Typography, Button, Link, Alert } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { FormatOverline } from "@mui/icons-material";
import { startCreatingUserWhithEmailPassword } from '../../store/auth'

const formData = {
  email: 'luis@google.com',
  password: '123456',
  displayName: 'Luis Muñoz'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const { displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(startCreatingUserWhithEmailPassword(formState))

  }

  return (

    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
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
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
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
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 2 }}>

          <Grid size={{ xs: 12 }}
            sx={{ display: (!!errorMessage ? 'block' : 'none') }}
          >
            <Alert severity='error'> {errorMessage} </Alert>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              disabled={isCheckingAuth}
              type="submit"
              fullWidth
              variant="contained"
            >
              Crear Cuenta
            </Button>
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
