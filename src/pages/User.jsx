//user params da accesso a values dinamicos
import { useParams} from "react-router-dom";// hook para leer parametros dinamicos 

export default function User() {
    //extraer parametro
    const { id } = useParams() ;

    return (
        <main>
            <h1> User </h1>
            <p> User profile Muestra ID: <strong>{id}</strong> </p>
        </main>
    );

}