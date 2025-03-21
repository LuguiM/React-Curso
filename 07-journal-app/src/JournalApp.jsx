import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournalApp = () => {
    return (
        <>
            <AppTheme>
                <AppRouter />
            </AppTheme>
            {/* <h1>hello?</h1> */}
        </>
    )
}
