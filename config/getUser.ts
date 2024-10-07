import { getServerSession, Session } from "next-auth";
import { authOptions } from "./auth";

export interface AuthUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export interface AuthResult {
    user: AuthUser | null;
    userId: string | null;
    isAuthenticated: boolean;
    error?: string;
}

export async function useAuth(): Promise<AuthResult> {
    try {
        const session: Session | null = await getServerSession(authOptions);

        if (!session) {
            return {
                user: null,
                userId: null,
                isAuthenticated: false
            };
        }

        const user = session.user as AuthUser;
        
        return {
            user,
            userId: user.id,
            isAuthenticated: true
        };
    } catch (error) {
        console.error('Auth error:', error);
        return {
            user: null,
            userId: null,
            isAuthenticated: false,
            error: 'Authentication failed'
        };
    }
}