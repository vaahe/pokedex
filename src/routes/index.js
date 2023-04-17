import { News } from "pages/News";
import { About } from "pages/About";
import { Error } from "pages/Error";
import { Pokedex } from "pages/Pokedex";
import { Container } from "components/Container";


export const routes = [
    {
        path: "/",
        element: <Container />
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/pokedex",
        element: <Pokedex />
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