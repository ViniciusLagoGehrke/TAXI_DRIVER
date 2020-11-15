import React from 'react'

function HomePage() {
  return (
    <>
      <div class="bg-gray-100 flex flex-col p-8">

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1 md:place-items-center">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Taxi Sharing Groups</h3>
                <p class="mt-1 text-sm leading-5 text-gray-600">
                  Please enter your name, company's email address and destination address.
                </p>
              </div>
              <div class="hidden md:block">
                <img class="h-100 w-100 rounded-md" src="/images/man-searching-car-for-rent.jpg" alt="man-searching-car-for-sharing" />
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
                        <input id="name" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                        <input id="email_address" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="shift" class="block text-sm font-medium leading-5 text-gray-700">End of Shift</label>
                        <select id="shift" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                          <option>00:00</option>
                          <option>01:00</option>
                          <option>02:00</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                        <input id="street_address" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City</label>
                        <input id="city" class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="hidden sm:block">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      email
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      End of Shift
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Taxi ID
                    </th>
                    <th class="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        Jane Cooper
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <div class="text-sm leading-5 text-gray-900">
                            jane.cooper@example.com
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-900">
                        00:00
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                      Rua de Gomes Leal
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-900">
                        01
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="hidden sm:block">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>



      </div>
    </>
  )
}

export default HomePage