import { Chat } from "../models/auth";
import { User } from "../models/user";
import http from './http.service';

export const loginService = async (credentials: User) => {
    try {
        const response = await http.post<Chat[]>('/Prod/', credentials);
        return response;
    } catch (error) {
        console.error(error);
    }
}