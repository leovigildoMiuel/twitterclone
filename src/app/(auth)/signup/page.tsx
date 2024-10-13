import { SignUpForm } from "@/components/auth/signup-form"
import { Logo } from "@/components/ui/logo"
import Link from "next/link"

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6"> 
            <Logo size={100} />

            <h6 className="mt-4 text-2xl">Crie uma conta</h6>
            <div className="mt-5 mb-7 flex flex-col gap-6">
                <SignUpForm/>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500"> Já tem uma conta?</div>
                <Link href='/signin' className="hover:underline">Entrar no X</Link>
            </div>

        </div>
    )
}