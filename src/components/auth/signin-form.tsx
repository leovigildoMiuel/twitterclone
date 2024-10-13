"use client"


import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignInForm = () => {

    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const hdEnterButton = () => {
        router.replace('/home')
    }
    return (
        <>
            <Input
                placeholder="Digite seu email"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input 
                placeholder="Digite sua Senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <Button
                label="Entrar"
                onClick={hdEnterButton}
                size={1}
            />

        </>
    )
}