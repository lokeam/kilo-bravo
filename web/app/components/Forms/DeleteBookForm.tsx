import { IoWarningOutline } from "react-icons/io5";

export default function DeleteBookForm() {

  return (
    <div className="text-center">
      <IoWarningOutline size={50} color="white" className="mx-auto mb-4 h-14 w-14 "/>
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this book?</h3>
      <div className="flex justify-center gap-4">
        <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700 rounded-lg">
          <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">Delete</span>
        </button>
        <button type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none :ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white rounded-lg">
          <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">Cancel</span>
        </button>
      </div>
    </div>
  );
}

