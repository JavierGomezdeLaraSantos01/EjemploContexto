import React from "react";
export const temas = {
    light:{
        foreground:'#000000',
        background:'#f2f2f2'
    },
    dark:{
        foreground:'#ffffff',
        background: '#222222'
    }
};
const ContextoTema = React.createContext(temas.light);

export default ContextoTema;