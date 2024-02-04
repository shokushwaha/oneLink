
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/buttons/LogoutButton";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Header() {
    const session = await getServerSession(authOptions);
    return (
        <header className="bg-slate-100 border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 text-white">
                        <FontAwesomeIcon icon={faLink} className="text-white" />
                        <span className="font-extrabold text-2xl text-slate-800">OneLink</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-gray-400 text-sm">
                        <Link href={'https://shocodev.vercel.app'} target="_blank">Contact</Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-100 bg-blue-500 rounded-md px-4">
                    {!!session && (
                        <>
                            <Link href={'/account'}>
                                Hello, {session?.user?.name}
                            </Link>
                            <LogoutButton />
                        </>
                    )}
                    {!session && (
                        <>
                            <Link href={'/login'}>Sign In</Link>

                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}