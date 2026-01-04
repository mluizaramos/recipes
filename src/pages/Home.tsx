import { useState } from "react";
import { Banner } from "../components/Banner";
import { CandyRecipes } from "../components/CandyRecipes";
import { Category } from "../components/Category";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainRecipes } from "../components/MainRecipes";
import { RitasFavorite } from "../components/RitasFavorite";

export function Home() {
    const [search, setSearch] = useState("");
   
    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <Banner />
            <MainRecipes />
            <Category />
            <RitasFavorite />
            <CandyRecipes />
            <Footer />
        </>
    );
}
