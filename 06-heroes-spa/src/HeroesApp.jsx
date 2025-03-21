import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./Auth"

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>

        </>
    )
}
