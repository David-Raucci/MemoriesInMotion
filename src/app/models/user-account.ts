export class UserAccount {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(userId: number, userEmail: string, userPassword: string, userFirstName: string, userMiddleName: string, userLastName: string){
        this.userId=userId;
        this.email=userEmail;
        this.password=userPassword;
        this.firstName=userFirstName;
        this.middleName=userMiddleName;
        this.lastName=userLastName;
    }


}
