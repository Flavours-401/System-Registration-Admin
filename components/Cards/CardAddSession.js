import React from "react";

// components

export default function CardAddSession(props) {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <div className="px-6 py-6 mb-0 bg-white rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-blueGray-700">Add Session</h6>

          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form  onSubmit={props.formHandler} >
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Add Session Year
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Session Start Year
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    name="session_start_year"
                    // defaultValue="Enter Course"
                  />
                </div>
                
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Session End Year

                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    name="session_end_year"
                    // defaultValue="Enter Course"
                  />
                </div>
                
              </div>
              <div className="w-full px-4 lg:w-12/12">
                <div className="relative w-full mb-3">
                  <button
              className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-md focus:outline-none"
              type="submit"
            >
              Add Session Year
                 </button> 
                </div>
              </div>
            </div>


          </form>
        </div>
      </div>
    </>
  );
}
