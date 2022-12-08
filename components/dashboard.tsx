import { GetServerSideProps } from 'next'
import React from 'react'
import { ISearch } from '../interfaces/search'
import { getSessionFromCookie, User } from '../lib'
import { searchProfessionals } from '../lib/providers/search'
import { AvailabilityFilter } from './availabilityFilter'
import { ContactList } from './contactList'
import { ContactListPaginator } from './contactListPaginator'
import { ServiceFilter } from './serviceFilter'
import { SortBy } from './sortby'

interface Props {
  user: User | null,
  providers?: ISearch[],
}

export const Dashboard = ({ user, providers }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center bg-white py-4">
        <div className="mx-auto w-full max-w-xs">
          <label htmlFor="filter" className="justify-center block text-sm block font-medium text-gray-700">
            Find a housekeeper
          </label>
          <div className="relative mt-1 flex items-center">
            <input
              type="text"
              name="filter"
              id="filter"
              className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceFilter></ServiceFilter>
          <AvailabilityFilter></AvailabilityFilter>
          <SortBy></SortBy>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-8">
        <ContactList user={user} providers={providers}></ContactList>
      </div>
      <ContactListPaginator></ContactListPaginator>
    </>
  )
}