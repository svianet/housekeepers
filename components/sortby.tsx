import { HOUSEKEEPER_SORTBY } from "../lib/constants"

export const SortBy = () => {
    return (
      <div>
        <label htmlFor="sort_by" className="block text-sm font-medium text-gray-700">
          Sort by
        </label>
        <select
          id="sort_by"
          name="sort_by"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue="R"
        >
          {HOUSEKEEPER_SORTBY.map((item) => (
            <option value={item.key}>{item.name}</option>  
          ))}
        </select>
      </div>
    )
  }
  