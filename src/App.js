import "tailwindcss/tailwind.css";
import popularDestinationsData from "./data/popularDestinationsData";
import { beachWork, logo } from "./img";

function App() {
  return (
    <div className="App bg-gray-100 ">
      <div className="bg-gray-100 lg:grid grid-cols-2 2xl:grid-cols-5">
        <div
          className="
          px-8
          py-12
          max-w-md
          mx-auto
          sm:max-w-xl
          lg:px-12 lg:py-24 lg:max-w-full
          xl:mr-0
          2xl:col-span-2
        "
        >
          <div className="xl:max-w-xl">
            <img className="h-10" src={logo} alt="Workcation" />
            <img
              className="
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-cover
              object-center
              lg:hidden
            "
              src={beachWork}
              alt="Woman workcationing on the beach"
            />
            <h1
              className="
              mt-6
              text-2xl
              font-bold
              text-gray-900
              sm:mt-8 sm:text-4xl
              lg:text-3xl
              xl:text-4xl
            "
            >
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500"> Take advantage of it. </span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:space-x-2 sm:mt-6 space-y-2 sm:space-y-0">
              <a
                className="
                inline-block
                px-5
                py-3
                rounded-lg
                shadow-lg
                bg-indigo-500
                hover:bg-indigo-400 hover:-translate-y-0.5
                transform
                transition
                text-white
                uppercase
                tracking-wider
                font-semibold
                text-sm
                sm:text-base
                focus:outline-none
                focus:ring
                focus:ring-offset-2
                focus:ring-indigo-500
                focus:ring-opacity-50
                active:bg-indigo-600
              "
                href="/#"
              >
                Book your Escape
              </a>
              <a
                className="
                inline-block
                px-5
                py-3
                rounded-lg
                hover:bg-gray-200
                bg-gray-300
                transform
                transition
                text-gray-800
                uppercase
                tracking-wider
                font-semibold
                text-sm
                sm:text-base
                focus:outline-none
                focus:ring
                focus:ring-offset-2
                focus:ring-gray-400
                focus:ring-opacity-50
                active:bg-gray-300
              "
                href="/#"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={beachWork}
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Popular Destinations
        </h2>
        <p className="mt-2 text-gray-600">
          A Selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinationsData.map((destination) => {
            return (
              <div
                key={destination.city}
                className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="h-32 w-32 flex-shrink-0"
                  src={destination.imageUrl}
                  alt={destination.imageAlt}
                />
                <div className="px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {destination.city}
                  </h3>
                  <p className="text-gray-600">
                    ${destination.averagePrice} / night average
                  </p>
                  <div className="mt-4">
                    <a
                      href="/#"
                      className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                    >
                      Explore {destination.propertyCount} properties
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
