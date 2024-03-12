"use client";

import { useFormState } from "react-dom";
import { createUser } from "../../actions/createUser";

import PageLayout from "../../components/layouts/page-layout";
import Link from "next/link";

const initialState = {
  message: "",
};

export default function Signup() {
  const [state, formAction] = useFormState(createUser as any, initialState);

  return (
    <PageLayout>
      <div>
        <Link href="/" className="inline-block">
          <button className="group text-primary font-semibold text-md border-b text-blue-500 hover:bg-blue-500 hover:text-blue-50 focus:outline-none focus:ring focus:ring-blue-300 backdrop-blur-2xl w-auto rounded-md border border-blue-500 px-4 py-1">
            back
          </button>
        </Link>
      </div>

      <form action={formAction} className="space-y-4">
        <label
          htmlFor="email"
          className="block text-md font-bold leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            id="email"
            name="email"
            required
            className="block w-full rounded-md py-1.5 pl-3 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 "
          />
        </div>

        <p className="text-sm">{state.message}</p>
        <button
          type="submit"
          className="group text-primary font-semibold text-md border-b text-blue-500 hover:bg-blue-500 hover:text-blue-50 focus:outline-none focus:ring focus:ring-blue-300 backdrop-blur-2xl w-auto rounded-md border border-blue-500 px-4 py-1"
        >
          Sign Up
        </button>
      </form>
    </PageLayout>
  );
}
