interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
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