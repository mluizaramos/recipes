import { useState } from "react";
import { Banner } from "../components/Home/Banner";
import { CandyRecipes } from "../components/Home/CandyRecipes";
import { Category } from "../components/Home/Category";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainRecipes } from "../components/Home/MainRecipes";
import { RitasFavorite } from "../components/Home/RitasFavorite";

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
