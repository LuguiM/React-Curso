import { Routes, Route, Navigate } from "react-router"
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../pages"
import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                {/* <Route path="login" element={<LoginPage />} /> */}

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
