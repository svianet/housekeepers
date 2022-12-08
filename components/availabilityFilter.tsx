import { AVAILABILITY } from "../lib/constants"

export const AvailabilityFilter = () => {
    return (
      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
          Availability
        </label>
        <select
          id="availability"
          name="availability"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="W"
        >
          {AVAILABILITY.map((av) => (
            <option value={av.key}>{av.name}</option>  
          ))}
        </select>
      </div>
    )
  }
  