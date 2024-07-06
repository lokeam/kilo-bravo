import { IoCloudUploadOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";

export default function NewBookForm() {
  return (
    <div className="relative p-4 pt-0 w-full max-w-2xl h-full">
      <form className="space-y-4 md:space-y-6" action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name" />
              </div>
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected>Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genres</label>
                  <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand" />
              </div>
              <div>
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag / Slug</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999" />
              </div>
              <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                  <div>
                      <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                      <input type="number" name="weight" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="12" />
                  </div>
                  <div>
                      <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pages</label>
                      <input type="number" name="length" id="length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="105" />
                  </div>
                  <div>
                      <label htmlFor="breadth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                      <input type="number" name="breadth" id="breadth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="15" />
                  </div>
                  <div>
                      <label htmlFor="width" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width (cm)</label>
                      <input type="number" name="width" id="width" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="23" />
                  </div>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"></textarea>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                  <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"></textarea>
              </div>
          </div>
          <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div className="flex items-center mr-4">
                  <input id="inline-checkbox" type="checkbox" value="" name="sellingType" className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Physical</label>
              </div>
              <div className="flex items-center mr-4">
                  <input id="inline-2-checkbox" type="checkbox" value="" name="sellingType" className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="inline-2-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Book</label>
              </div>
              <div className="flex items-center mr-4">
                  <input id="inline-checked-checkbox" type="checkbox" value="" name="sellingType" className="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="inline-checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Audio</label>
              </div>
          </div>
          <div className="mb-4">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Images</span>
              <div className="flex justify-center items-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <IoCloudUploadOutline className="w-12 h-12 text-gray-50"/>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                  </label>
              </div>
          </div>
          <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button type="submit" className="w-full sm:w-auto justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add product</button>
              <button data-modal-toggle="createProductModal" type="button" className="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                <TfiClose className="mr-2"/>
                  Discard
              </button>
          </div>
      </form>
    </div>
  );
}