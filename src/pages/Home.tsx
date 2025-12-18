import { Banner } from "../components/Banner";
import { CandyRecipes } from "../components/CandyRecipes";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainRecipes } from "../components/MainRecipes";
//import { recipes } from "../data/recipes";

export function Home() {
  return (
    <>
    <Header />
    <Banner />
    <MainRecipes />
    <CandyRecipes />
    <Footer />
    </>
  );
}
