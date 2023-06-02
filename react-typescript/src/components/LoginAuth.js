import { redirect } from "react-router-dom"
export default async function RequireAuth(val) {
    const isLoggedIn = val
    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}