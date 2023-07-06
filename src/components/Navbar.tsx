import Link from "next/link";
import React, { useState } from "react";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  return (
    <nav className="w-full border-b-[0.1rem] border-gray-200 bg-white">
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="overlay absolute top-0 h-screen w-full overflow-hidden bg-black bg-transparent md:hidden"
        ></div>
      )}
      <div className="flex h-24 w-full flex-row items-center justify-between">
        <div className="flex">
          <Link href="/" className="md:mr-5 lg:mr-14">
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                fill="#1D2026"
                fillRule="nonzero"
              />
            </svg>
          </Link>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex "
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 ">
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2  font-bold text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  2ndSnkrs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="inline-flex items-center justify-center rounded-lg px-2">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="order-1 ml-5 flex w-full items-center justify-between">
            <ul className="flex items-center font-medium">
              <li>
                {user.isSignedIn ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <SignInButton>
                    <span className="block cursor-pointer rounded bg-orange-500 py-2 pl-3 pr-4 text-white hover:text-orange-500 ">
                      Sign-in
                    </span>
                  </SignInButton>
                )}
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-lg px-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-5 top-20 items-center justify-between md:hidden"
            id="navbar-sticky"
          >
            <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 ">
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2  font-bold text-gray-400 transition-colors duration-100 hover:text-black md:p-0"
                >
                  2ndSnkrs
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
