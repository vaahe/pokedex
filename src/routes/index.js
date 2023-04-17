import { News } from "pages/News";
import { About } from "pages/About";
import { Error } from "pages/Error";
import { Pokemons } from "pages/Pokedex";
import { Container } from "components/Container";


export const routes = [
    {
        path: "/pokedex",
        element: <Container />
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/pokemons",
        element: <Pokemons />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "*",
        element: <Error />
    }
]