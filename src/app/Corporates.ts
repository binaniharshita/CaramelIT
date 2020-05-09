export class Corporates
{
        id: string;
        name: string;
        
        email: string;
        phoneNo: string;
        address: string;
        city: string;
        country : string;
        date : string;
        noOfCourses: string;

        constructor(id, name,email, phoneNo, address, city, country, date, noOfCourses)
        {
            this.id = id;
            this.name = name;
            
            this.email = email;
            this.phoneNo = phoneNo;
            this.address = address;
            this.city = city;
            this.country = country;
            this.date = date;
            this.noOfCourses = noOfCourses;
        }
}