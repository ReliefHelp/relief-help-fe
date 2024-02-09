import axois from "axios"
import jwt_decode from "jwt_decode"
import dayjs from "dayjs"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const baseURL = "https://reliefhelp.onrender.com/";

const useAxios = () =>{
    const   [authTokens, setUser, setAuthToken = useContext(AuthContext)]
}