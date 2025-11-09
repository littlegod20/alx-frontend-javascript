interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
}

interface Directors extends Teacher {
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

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  numberOfReports: 17,
  location: "London",
  contract: false,
  subject: "Math",
};