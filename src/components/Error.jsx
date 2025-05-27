import { useRouteError } from "react-router";
const Error = (err) =>{
    return(
        <div>
            <h2>Something</h2>
            <h1>Error!!!</h1>
            <h3>Page not loaded!!!!!</h3>
            <h3>{err}</h3>
        </div>
    )
}
export default Error;