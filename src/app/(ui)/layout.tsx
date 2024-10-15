import { NavItem } from "@/components/nav/nav_item";
import { NavLogout } from "@/components/nav/nav_logout";
import { NavMyProfile } from "@/components/nav/nav_myprofile";
import { Logo } from "@/components/ui/logo";
import { SearchInput } from "@/components/ui/search-input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react"


type Props = {
    children: ReactNode;
}

export default function Layout ({ children }: Props) {

    return(
        <main className="main-h-screen  flex justify-center mx-auto max-w-7xl ">
            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-800">
                <div className="flex-1 mt-6">
                    <Logo size={55}/>
                    <nav className="mt-10 ">
                            <NavItem 
                             href="/home"
                             icon={faHouse}
                             label="Página Inicial"
                            />


                            <NavItem 
                             href="/Profile"
                             icon={faUser}
                             label="Meu Perfil"
                            />
                    </nav>
                </div>
                <div className="mb-6 flex-col gap-4 ">
                    <NavMyProfile />
                    <NavLogout />
                </div>
            </section>

            <section className="flex-1 max-w-lg">
                {children}
            </section>
            
            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-800">
                <SearchInput hideOnSearch />
            </aside>
        </main>
    )
}