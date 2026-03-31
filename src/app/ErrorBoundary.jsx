import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status} {error.statusText}</h1>
                <p>{error.data}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Something went wrong</h1>
            <p>Try again later.</p>
        </div>
    );
}

export default ErrorBoundary;