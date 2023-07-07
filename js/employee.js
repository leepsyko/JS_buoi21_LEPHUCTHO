// 3. define Employee Construction

function Employee(
  account,
  name,
  email,
  password,
  dateOfWork,
  basicSalary,
  office,
  hourWork
) {
  this.accountE = account;
  this.nameE = name;
  this.emailE = email;
  this.passwordE = password;
  this.dateE = dateOfWork;
  this.basicSalaryE = basicSalary;
  this.officeE = office;
  this.hourWorkE = hourWork;
  this.wageE = this.wage();
  this.typeE = this.arrange();
}

// 5. method for Employee
Employee.prototype.wage = function () {
  if (this.officeE === "Sếp") {
    return this.basicSalaryE * 3;
  } else if (this.officeE === "Trưởng phòng") {
    return this.basicSalaryE * 2;
  } else {
    return this.basicSalaryE * 1;
  }
};
// 6. rate employee
Employee.prototype.arrange = function () {
  arrangeEmployee = "";
  if (this.hourWorkE >= 192) {
    return (arrangeEmployee = "Nhân viên xuất sắc");
  } else if (this.hourWorkE >= 176) {
    return (arrangeEmployee = "Nhân viên giỏi");
  } else if (this.hourWorkE >= 160) {
    return (arrangeEmployee = "Nhân viên khá");
  } else {
    return (arrangeEmployee = "Nhân viên trung bình");
  }
};
