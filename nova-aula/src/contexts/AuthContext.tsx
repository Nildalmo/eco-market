import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { iAuthContext } from "@/types/context";
import { iSingIn, iSingUp, iUser } from "@/types/userAccess";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Notify } from "@/components/Notify";
import { login } from "@/services/login";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isloged, setIsLoged] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>({} as iUser);
  const { push } = useRouter();

  useEffect(() => {
    setIsLoged(JSON.parse(localStorage.getItem("isLoged") as string));
  }, []);

  const singIn = (values: iSingIn) => {
    return new Promise((resolve) => {
      resolve(true);
      localStorage.setItem("isLoged", "true");
      const response = login(values);
      setUser(response);

      localStorage.setItem("user", JSON.stringify(response));
      setIsLoged(true);
      Notify("success", "Login concluido!");
      resolve(true);
      setTimeout(() => push("/"), 4000);
    });
  };

  useEffect(() => {
    const haUser = localStorage.getItem("user");
    if (haUser) {
      setUser(JSON.parse(haUser));
    }
  }, []);
  const logOut = () => {
    setUser({} as iUser);
    setIsLoged(false);
    localStorage.setItem("isLoged", "false");
    localStorage.setItem("user", "{}")
  }

  const iSingUp = (values: iSingUp) => {};

  return (
    <AuthContext.Provider value={{ singIn, user, isloged, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuth = () => useContext(AuthContext);
function setUser(arg0: any) {
  throw new Error("Function not implemented.");
}
