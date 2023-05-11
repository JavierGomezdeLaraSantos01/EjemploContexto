import React,{useContext} from "react";
import ContextoTema from "./Context";
import Boton from "./Boton";
const Layout = ()=>{
    const {tema} = useContext(ContextoTema);
    return (
        <div style={{'background-color': tema.background, 'color': tema.foreground}}>
            <header>
                <nav>
                    <p>Inicio</p>
                    <Boton/>
                </nav>
            </header>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default Layout;