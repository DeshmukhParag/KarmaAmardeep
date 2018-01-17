export class IStudent{
    studentID:string;
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    dateOfBirth:Date;
    school:string;
    standard:string;
    achivements:string;   
    parentMobileNumber:string;
    nationality:string;
    pincode:number; 
    address:string;
    state:string;
    district:string;
    taluka:string;
    photo:string;
    marksheetLastYear:string;
    representativeId:string;    
    fileName:string;
    // filePath:string;
    modifieddate:Date;
    AddedDate:Date;
    length:number;
    schoolName:string;
    students:any;
    total:string;
    lampPrice:string;
   
  public updateFrom(src:IStudent):void { 
      this.studentID = src.studentID;
      this.firstName =src.firstName;
      this.middleName=src.middleName;
      this.lastName=src.lastName;
      this.gender= src.gender;
      this.dateOfBirth =src.dateOfBirth;
      this.school=src.school;
      this.achivements=src.achivements;
      this.parentMobileNumber=src.parentMobileNumber;
      this.nationality=src.nationality;
      this.pincode=src.pincode;
      this.address=src.address;
      this.state=src.state;
      this.taluka=src.taluka;
      this.photo=src.photo;
      this.marksheetLastYear=src.marksheetLastYear;
      this.representativeId=src.representativeId;
      this.fileName=src.fileName;
      this.modifieddate=src.modifieddate;
      this.AddedDate= src.AddedDate;
      this.schoolName =src.schoolName;
  }
    

}