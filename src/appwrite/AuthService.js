import EnvironmentVariable from "../environment_variable/EnvironmentVariable";
import { Client, ID, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(EnvironmentVariable.appwriteUrl)
      .setProject(EnvironmentVariable.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Signup
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        password,
        name,
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service :: create account :: error", error);
    }
  }

  // check if user if login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: get current user :: error", error);
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createSessions(email, password);
    } catch (error) {
      console.log("Appwrite Service :: login :: error", error);
    }
  }

  // Logout
  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
