export class User { //unser user den wir hinzufügen  in ein model zu überführen 
  firstName: string;
  lastName: string;
  email:string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
 // customIdName: string;
  

  constructor(obj?: any) { // obj ist ein JSON // ? ist für optional 
    this.firstName = obj? obj.firstName : ''; // els if abfrage 
    this.lastName = obj? obj.lastName : ''; // wenn obj dann mach das  obj.lastName ansonsten(:) amch das ''
    this.email = obj? obj.email : '';
    this.birthDate = obj? obj.birthDate : '';
    this.street = obj? obj.street : '';
    this.zipCode = obj? obj.zipCode : '';
    this.city = obj? obj.city : '';
   // this.customIdName = obj? obj.customIdName : '';
  }

  public toJSON(){ // um in json zu umwandeln 
    return{
      firstName:  this.firstName,
      lastName:  this.lastName,
      email:  this.email,
      birthDate:   this.birthDate,
      street: this.street ,
      zipCode:  this.zipCode,
      city:   this.city,
    
    };
  }
}
