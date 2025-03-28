import { useMemo , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";
import { TextField, Typography, Button, Link, Alert } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { Google, Password } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange, formState, isFormValid, emailValid, passwordValid } = useForm({
    email: 'luis@google.com',
    password: '123456'
  }, formValidations);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isAuthicating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(startLoginWithEmailPassword(formState))

  }

  const onGoogleSignIn = () => {

    dispatch(startGoogleSignIn())

    console.log('onGoogle');
  }

  return (

    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ mt: 2 }}>
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

          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthicating}
              type="submit"
              fullWidth
              variant="contained"
            >
              Login
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthicating}
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              onClick={onGoogleSignIn}
            >
              Google
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register" >
            Crear una cuenta
          </Link>
        </Grid>

      </form>
    </AuthLayout>


  )
}
