
import { useState } from "react";
import { AllRecipes } from "../components/AllRecipes";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useSearchParams } from "react-router-dom";


export function Recipes() {
    const [params] = useSearchParams();
    const searchFromUrl = params.get("search") ?? "";

    const [search, setSearch] = useState(searchFromUrl);

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <AllRecipes search={search} />
            <Footer />
        </>
    )
}