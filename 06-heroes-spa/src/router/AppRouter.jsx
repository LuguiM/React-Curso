import { Routes, Route, Navigate } from "react-router"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../Auth"
import { Navbar } from "../ui"
import { PrivateRoute, PublicRoute } from "./index"

export const AppRouter = () => {
    return (
        <>

            {/* <Navbar /> */}

            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />



            </Routes>
        </>
    )
}
