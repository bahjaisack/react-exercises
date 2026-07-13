import { useRouteError } from "react-router"

const NotFound = () => {
    const error = useRouteError();

  return (
    <div className="mx-auto max-w-md py-16 text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Oops!</h2>
        <p className="text-sm font-mono text-rose-500 bg-rose-50 inline-block px-2.5 py-1 rounded-md">
          {error?.statusText || "Error"}
        </p>
        <p className="text-base text-slate-600">Sorry, page not found.</p>
    </div>
  )
}

export default NotFound