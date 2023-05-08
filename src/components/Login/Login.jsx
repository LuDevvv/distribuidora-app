import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    console.log(auth?.currentUser)

    const singIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setemail("");
        } catch (e) {
            console.log(e);
        }
    }

    const singInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (e) {
            console.log(e);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input placeholder="Correo" onChange={(e) => { setemail(e.target.value) }} />
            <input placeholder="Contraseña" type="password" onChange={(e) => { setpassword(e.target.value) }} />
            <button onClick={singIn}>Ingresar</button>
            <button onClick={singInWithGoogle}>Ingresar con google</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
} 