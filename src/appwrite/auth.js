import conf  from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
     client = new Client();
     account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                console.log("User created successfully", userAccount);
                return this.login({ email, password });
            }else {
                console.log("User creation failed");
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
}
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        
        } catch (error) {
            throw error; 
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
    async logout() {
        try {
            // return await this.account.deleteSession('current'); //for only current session
            return await this.account.deleteSessions(''); // to delete all sessions
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new AuthService();

export default authservice;

/*Here first we created a class of AuthService then we created object of that class
then we created object of client then we called  constructor of client to set the url and project id then 
we created object of account
then we created methods to create account, login, get current user and logout */