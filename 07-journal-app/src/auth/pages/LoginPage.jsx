import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";
import { TextField, Typography, Button, Link } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { Google, Password } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)

  const { email, password, onInputChange, formState } = useForm({
    email: 'luis@google.com',
    password: '123456'
  });
  const dispatch = useDispatch();

  const isAuthicating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication())

  }

  const onGoogleSignIn = () => {

    dispatch(startGoogleSignIn())

    console.log('onGoogle');
  }

  return (

    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
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
