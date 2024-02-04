'use client';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation"
export default function LoginWithGoogle() {
    return (
        <button
            onClick={() => {
                signIn('google');
                redirect('/account');
            }}
            className="bg-blue-500 shadow text-center w-full py-4 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="h-6 text-slate-100  " />
            <span className="text-slate-100">Sign In with Google</span>
        </button>
    );
}