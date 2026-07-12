import { useRouteError } from "react-router"

const NotFound = () => {
    const error = useRouteError();

  return (
    <div>
        <h2>error</h2>
        <p>{error.statusText}</p>
        <p>Sorry page not found</p>
        </div>

  )
}

export default NotFound