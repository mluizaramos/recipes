import { Banner } from "../components/Banner";
import { CandyRecipes } from "../components/CandyRecipes";
import { Category } from "../components/Category";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainRecipes } from "../components/MainRecipes";
import { RitasFavorite } from "../components/RitasFavorite";
//import { recipes } from "../data/recipes";

export function Home() {
    return (
        <>
            <Header />
            <Banner />
            <MainRecipes />
            <Category />
            <RitasFavorite />
            <CandyRecipes />
            <Footer />
        </>
    );
}
