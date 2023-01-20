import React from "react";

function UsersTable() {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-80 text-center">
              Client
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Permissions
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Tickets
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Comments
            </th>
            <th scope="col" className="px-6 py-3 text-center sr-only">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-around items-center"
            >
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="user pic"
                className="w-12 h-12 rounded-full outline outline-green-500"
              />
              <div className="md:flex flex-col hidden">
                <span>John Doe</span>
                <span className="text-sm italic">
                  gathitumithi9000@gmail.com
                </span>
              </div>
            </th>
            <td className="px-6 py-4 text-center">Low Level</td>
            <td className="px-6 py-4 text-center">1</td>
            <td className="px-6 py-4 text-center">0</td>
            <td className="px-6 py-4 text-center">
              <button className="font-medium text-white bg-red-500 px-2 py-1 rounded-lg hover:scale-[1.03] transition duration-1000 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-around items-center"
            >
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="user pic"
                className="w-12 h-12 rounded-full outline outline-green-500"
              />
              <div className="md:flex flex-col hidden">
                <span>John Doe</span>
                <span className="text-sm italic">
                  gathitumithi9000@gmail.com
                </span>
              </div>
            </th>
            <td className="px-6 py-4 text-center">Low Level</td>
            <td className="px-6 py-4 text-center">1</td>
            <td className="px-6 py-4 text-center">0</td>
            <td className="px-6 py-4 text-center">
              <button className="font-medium text-white bg-red-500 px-2 py-1 rounded-lg hover:scale-[1.03] transition duration-1000 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-around items-center"
            >
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="user pic"
                className="w-12 h-12 rounded-full outline outline-green-500"
              />
              <div className="md:flex flex-col hidden">
                <span>John Doe</span>
                <span className="text-sm italic">
                  gathitumithi9000@gmail.com
                </span>
              </div>
            </th>
            <td className="px-6 py-4 text-center">Low Level</td>
            <td className="px-6 py-4 text-center">1</td>
            <td className="px-6 py-4 text-center">0</td>
            <td className="px-6 py-4 text-center">
              <button className="font-medium text-white bg-red-500 px-2 py-1 rounded-lg hover:scale-[1.03] transition duration-1000 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
