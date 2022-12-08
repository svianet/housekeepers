import { US_STATES } from "../lib/constants"

export const ServiceFilter = () => {
    return (
      <div>
        <label htmlFor="state_address" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="state_address"
          name="state_address"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="FL"
        >
          {US_STATES.map((state) => (
            <option value={state.code}>{state.name}</option>  
          ))}
        </select>
      </div>
    )
  }
  