"use client"

import { user } from "@/data/user"
import { faImage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/button"



export const TwitPost = () => {

    const hadleImageUpload = () => {

    }
     const handlePostClick = () => {

     }

    return(
        <div className="flex gap-6 px-8 mt-3 border-b-2 border-gray-900" >
            <div>
                <img 
                    src={user.avatar}
                    alt={user.name}
                    className="size-10 rounded-full"
                />
            </div>
            <div className=" flex-1">
                <div 
                    className="main-h-14 outline-none text-sm text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
                    contentEditable
                    role="textbox"
                    data-placeholder='O que está pensando?'
                    >
                    
                </div>
                <div  className=" flex justify-between mt-5 mb-4">
                    <div onClick={ hadleImageUpload } className="cursor-pointer">
                        <FontAwesomeIcon icon={faImage} className="size-5"/>
                    </div>
                    <div className="w-20">
                        <Button 
                            label="Poster"
                            size={4}
                            onClick={ handlePostClick }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}