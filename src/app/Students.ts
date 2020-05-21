export class Students
{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        phoneNo: string;
        address: string;
        city: string;
        country : string;
        date : string;
        noOfCourses: string;

        constructor(id, firstName, lastName, age, email, phoneNo, address, city, country, date, noOfCourses)
        {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.phoneNo = phoneNo;
            this.address = address;
            this.city = city;
            this.country = country;
            this.date = date;
            this.noOfCourses = noOfCourses;
        }
}