function App() {
  return (
    <div
      className="flex flex-wrap bg-cover w-full h-screen place-content-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="flex flex-wrap w-full place-content-center p-4">
        <h1 className=" text-white text-6xl font-bold">
          Welcome to Main Site Navigation
        </h1>
      </div>
      <div className="flex flex-wrap w-full place-content-center p-4">
        <p className=" text-white text-2xl backdrop-blur-md rounded-xl p-4">
          Click on the respective links to navigate to each tasks.
        </p>
      </div>
      <div className="relative overflow-x-auto shadow-xl sm:rounded-xl backdrop-blur-lg border-4 border-lime-500">
        <table className="w-full text-lg text-center text-gray-500 backdrop-blur-md">
          <thead className="text-white uppercase text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task name
              </th>
              <th scope="col" className="px-6 py-3">
                Git Repository Link
              </th>
              <th scope="col" className="px-6 py-3">
                Working Site Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 1 - Paragraph Word Counter
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/paragraph-counter-react"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://shreyam-007.github.io/paragraph-counter-react/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 2 - Calculator App
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/calculator-react"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://shreyam-007.github.io/calculator-react/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 3 - Color Picker
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/color-picker-react/tree/main"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://shreyam-007.github.io/color-picker-react/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 4 - API Data Fetcher
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/API-data-fetcher-react"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://shreyam-007.github.io/API-data-fetcher-react/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 5 - Age Calculator
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/age-calculator-react"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://shreyam-007.github.io/age-calculator-react/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-900 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-left"
              >
                Task 6 - Personal Portfolio
              </th>
              <td className="px-6 py-4">
                <a
                  href="https://github.com/Shreyam-007/Portfolio-react"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="https://portfolio-react-five-sepia.vercel.app/"
                  target="_blank"
                  className="font-medium text-lime-400 hover:underline"
                >
                  Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
