import React,{useContext} from "react";
import ContextoTema from "./Context";
function Boton() {
    const {tema,handleChangeTema} = useContext(ContextoTema);
    return (
        <button onClick={handleChangeTema}
        style={{'background-color': tema.background, 'color': tema.foreground}}>
            Cambiar Tema
        </button>
    );
}
export default Boton;