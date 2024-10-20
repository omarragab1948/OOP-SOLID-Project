export enum Roles {
    Admin = "admin",
    GeneralManager = "general-manager",
    BranchManager = "branch-manager",
    Supervisor = "supervisor",
    Employee = "employee"
  }
  
  export interface IUser {
    name: string;
    age: number;
    role: Roles;
  }