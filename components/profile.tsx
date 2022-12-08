import { useState, useEffect } from 'react'
import { IProfile } from '../interfaces/profile';
import { User } from '../lib';
import { ROLE, LANGUAGES } from '../lib/constants';
import { checkbox2Array, fillArray } from '../lib/util';
import { notify } from './errorNotification';

interface Props {
  user?: User | null,
  profile: IProfile | undefined
}

const SelectProfile = ({ profile } : Props) => {
  const [selectedRole, setRole] = useState(profile?.role_id)
  const handleRoleChange = (event: any) => {
    setRole(event.target.value);
  };
  
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 sm:col-span-2">
          <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
            Are you a...
          </label>
          <div className="flex rounded-md shadow-sm">
            <label className="flex items-center cursor-pointer m-2">
              <input
                id="customer-role"
                name="role_id"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                value={ROLE.CUSTOMER}
                checked={selectedRole == ROLE.CUSTOMER}
                onChange={handleRoleChange}
              />
              <label htmlFor="customer-profile" className="ml-3 block text-sm font-medium text-gray-700">
                Customer
              </label>
            </label>              
            <label className="flex items-center cursor-pointer m-2">
              <input
                id="housekeeper-role"
                name="role_id"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                value={ROLE.HOUSEKEEPER}
                checked={selectedRole == ROLE.HOUSEKEEPER}
                onChange={handleRoleChange}
              />
              <label htmlFor="housekeeper-profile" className="ml-3 block text-sm font-medium text-gray-700">
                Housekeeper
              </label>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
const PersonLanguages = ({ profile } : Props) => {
  let initialCheck = fillArray(LANGUAGES, "lang_id", profile?.languages);
  
  const [checked, setChecked] = useState(initialCheck)
  const handleCheckboxChange = (index: number, value: boolean) => {
    let newChecked = [...checked];
    newChecked[index] = value;
    setChecked(newChecked);
  };

  return (
    <>
      <div>
        <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
          Languages
        </label>
        <div className="mt-1">
        {
          LANGUAGES?.map((language, index) => (
            <div key={language.lang_id}>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id={"language-"+language.lang_id}
                    name="language"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    value={language.lang_id}
                    checked={checked[index]}
                    onChange={e => handleCheckboxChange(index, e.target.checked)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor={"language-"+language.lang_id} className="font-medium text-gray-700">
                    {language.language_name}
                  </label>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </>
  );
}
const HouseKeeperProfile = ({ profile } : Props) => {
  return (
    <>
      {/* <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 sm:col-span-2">
          <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
            Business name
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="business-name"
              id="business-name"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Cleaning your home with love"
            />
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="first_name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
            defaultValue={profile?.person.first_name}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="last_name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
            defaultValue={profile?.person.last_name}
          />
        </div>
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          About
        </label>
        <div className="mt-1">
          <textarea
            id="bio"
            name="bio"
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Tell us about you"
            defaultValue={profile?.person.bio}
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Brief description for your profile. This information will used to find you in the internet.
        </p>
      </div>
    </>
  );
}
const PersonPhoto = ({ profile } : Props) => {
  return (
    <>
    <div>
    {/* <form action="/profile" method="post" encType="multipart/form-data"> */}
      <label className="block text-sm font-medium text-gray-700">Photo</label>
      <div className="mt-1 flex items-center">
        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        {/* <input type="file" name="avatar" /> */}
        <button
          type="button"
          className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Change
        </button>
      </div>
    {/* </form> */}
    </div>
    </>
  );
}
const PersonCoverPhoto = ({ profile } : Props) => {
  return (
    <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Cover photo</label>
      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF, WEBP up to 5MB</p>
        </div>
      </div>
    </div>
    </>
  );
}

export const Profile = ({user, profile} : Props) => {
    // const [user, setUser] = useState<User | null>(null);
    // // later...
    // setUser(newUser);
    const [data, setData] = useState<IProfile | undefined>(undefined)
    const [isLoading, setLoading] = useState(false)
   
    //setData(profile);

    // 3 - Client, 2 - Housekeeper, 1 - Administrator (needs an enumeration)
    console.log("profile", profile);

    const submitProfile = async (event: any) => {
      event.preventDefault();

      // Get data from the form
      let params: IProfile = {
        person: {
          first_name: event.target.first_name.value,
          last_name: event.target.last_name.value,
          bio: event.target.bio.value,
        },
        role_id: event.target.role_id.value,
        userId: user?.userId
      }
      // languages
      if (event.target.language) {
        params.languages = checkbox2Array(event.target.language);
      }

      console.log("component profile:", params);

      // API endpoint where we send form data.
      const url = '/api/profile';
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(params);
      // Form the request for sending data to the server
      const options = {
        body: JSONdata,
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      };

      // call api
      try {
        const result = await fetch(url, options);
        const data = await result.json() 
        notify(data);
      } catch (err: any) {
          notify(err);
      }      
    };

    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={submitProfile}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <SelectProfile profile={profile}/>
                    <HouseKeeperProfile profile={profile}></HouseKeeperProfile>
                    <PersonLanguages profile={profile}></PersonLanguages>
                    <PersonPhoto profile={profile}></PersonPhoto>
                    <PersonCoverPhoto profile={profile}></PersonCoverPhoto>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
