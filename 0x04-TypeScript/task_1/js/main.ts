interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Smith",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "New York",
  contract: false,
  subject: "Math",
};

console.log(teacher1);

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  numberOfReports: 17,
  location: "London",
  contract: false,
  subject: "Math",
};

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher({ firstName, lastName }: printTeacherFunction): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));


interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}