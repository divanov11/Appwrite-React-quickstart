import { useState, useEffect, createContext, useContext } from "react";
import { account } from "../appwrite/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await checkUserStatus();
        setUser(response);
        setLoading(false);
    };

    const checkUserStatus = async () => {
        try {
            const userData = await account.get();
            return userData;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await checkUserStatus();
            setUser(response);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const logoutUser = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    const contextData = { user, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth };

export default AuthProvider;
