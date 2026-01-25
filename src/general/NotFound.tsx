import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg text-base font-medium">
        Page not found.
      </h3>
      <button
        onClick={() => navigate(RoutePaths.HOME)}
        type="button"
        className="text-indigo-600 underline"
      >
        Go Home
      </button>
    </div>
  );
};
