import { Link } from "react-router-dom";

function Button({ text, redirect }: { text: string; redirect: string }) {
  return (
    <Link to={redirect}>
      <button
        data-testid="button"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-poppins font-regular  text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-bl bg-opacity-90 rounded-md group-hover:bg-opacity-0">
          {text}
        </span>
      </button>
    </Link>
  );
}

export default Button;
