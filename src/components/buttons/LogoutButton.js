'use client';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton({
    className = 'flex items-center gap-2 border p-2 px-4 shadow bg-red-500 text-white ',
    iconLeft = false,
    iconClasses = '',
}) {
    return (
        <button
            className={className}
            onClick={() => signOut()}>
            {iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
            )}
            <span>Logout</span>
            {!iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
            )}
        </button>
    );
}