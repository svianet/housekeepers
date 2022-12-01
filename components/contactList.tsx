import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { ISearch } from '../interfaces/search'
import { getSessionFromCookie, User } from '../lib'
import { searchProfessionals } from '../lib/providers/search'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Scott',
    title: 'Representative',
    role: 'Admin',
    email: 'scott@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
  }
  // More people...
]
interface Props {
  user: User | null,
  providers: ISearch[],
}

export const ContactList = ({user, providers} : Props) => {
  console.log(providers);
  
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {providers?.map((person) => (
        <li
          key={person.user_id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.image_url} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.first_name} {person.last_name} </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Hour rate</dt>
              <dd className="text-sm text-gray-500">${person.hour_rate_start} - ${person.hour_rate_end}</dd>
              <dt className="sr-only">Experience</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  { person.years_experience ? person.years_experience + ' year(s)' : ''}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`/detail`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Message</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
