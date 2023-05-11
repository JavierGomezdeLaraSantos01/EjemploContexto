import React,{useState} from "react";
import Layout from "./Layout";
import ContextoTema,{temas} from "./Context";
export default function App() {
    const [tema,setTema] = useState(temas.light);
    const handleChangeTema = () => {
        setTema(()=>{
            return tema === temas.dark? temas.light : temas.dark;
        });
    }
    return(
    <ContextoTema.Provider value={{tema,handleChangeTema}}>
        <Layout>
            
        </Layout>
    </ContextoTema.Provider>)
}