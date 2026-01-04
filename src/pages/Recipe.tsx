import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RecipeDetails } from "../components/RecipeDetails";

export function Recipe(){
    const [search, setSearch] = useState("");

    return(
        <>
            <Header search={search} setSearch={setSearch} />
            <RecipeDetails />
            <Footer />
        </>
    )
}