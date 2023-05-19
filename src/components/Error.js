import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <div className="container">
                <h2>Ooops!</h2>
                <p>There are some error in this page...</p>
                <h3>{err.status + " : " + err.statusText}</h3>
            </div>
        </>
    );
}

export default Error;