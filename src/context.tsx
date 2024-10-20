import { createContext, ReactNode, useContext } from "react";
import { IUser } from "./types/user";

interface UsersContextType {
  users: { name: string; u: IUser[] | [] }[];
  addUser: (role: string, newUser: IUser) => void;
  removeUser?: (role: string, userId: string) => void;
  updateUser?: (role: string, userId: string, updatedUser: IUser) => void;
  getUsers?: (role: string) => IUser[] | [];
  getUsersByRole?: (role: string) => IUser[] | [];
  getUserById?: (role: string, userId: string) => IUser | undefined;
}

const defaultContextValue: UsersContextType = {
  users: [
    { name: "branche-manager", u: [] },
    { name: "admin", u: [] },
    { name: "employee", u: [] },
    { name: "general-manager", u: [] },
    { name: "supervisor", u: [] },
  ],
  addUser: () => {},
  removeUser: () => {},
  updateUser: () => {},
  getUsers: () => [],
  getUsersByRole: () => [],
  getUserById: () => undefined,
};
export const UsersContext =
  createContext<UsersContextType>(defaultContextValue);

const Context = ({ children }: { children: ReactNode }) => {
  return (
    <UsersContext.Provider value={defaultContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default Context;

export const UserHandlerHook = () => {
  const UserContext = useContext(UsersContext);
  return UserContext;
};
