// create array cover list of object employee
let listEmploy = [];

// 1. Show list to table

function showList(listShow) {
  let showResult = listShow.reduce((result, value) => {
    return (
      result +
      `
      <tr>
      <td> ${value.accountE}</td>
      <td> ${value.nameE}</td>
      <td> ${value.emailE}</td>
      <td> ${value.dateE}</td>
      <td> ${value.officeE}</td>
      <td> ${value.wageE}</td>
      <td> ${value.typeE}</td>
      <td>
      <button class="btn btn-warning" onclick="selectorEmployee('${value.accountE}')">Chỉnh sửa</button>
      <button class="btn btn-danger" onclick="removeEmployee('${value.accountE}')">Xoá</button>
      </td>
      </tr>
      `
    );
  }, "");

  return (document.getElementById("tableDanhSach").innerHTML = showResult);
}

// 2. add the new employee into the listEmplyee

function addEmployee() {
  // Khúc này là phần thêm đối tượng
  // add object into array listOfEmployee
  // document.getElementsByTagName("body")[0].classList.remove("modal-open");
  // document.getElementById("myModal").classList.remove("show");
  // document.getElementById("myModal").style.display = "none";

  let employeeInput = validateLogIn();
  // console.log(employeeInput)
  if (!employeeInput) {
    return;
  }

  listEmploy.push(employeeInput);

  // Show on table

  // console.log(document.getElementsByClassName("sp-thongbao"));

  document.getElementById("myModal").classList.remove("show");
  document.getElementById("myModal").style.display = "";

  showList(listEmploy);
  $("#myModal").modal("hide");
}

// 3. Create new object employee with information from form input

// function createEmployee() {
// DOM
// let accountInput = document.getElementById("tknv").value;
// let nameInput = document.getElementById("name").value;
// let emailInput = document.getElementById("email").value;
// let passWordInput = document.getElementById("password").value;
// let dateInput = document.getElementById("datepicker").value;
// let salaryInput = document.getElementById("luongCB").value;
// let OfficeInput = document.getElementById("chucvu").value;
// let hourInput = document.getElementById("gioLam").value;

// // create Object

// let employeeInput = new Employee(
//   accountInput,
//   nameInput,
//   emailInput,
//   passWordInput,
//   dateInput,
//   salaryInput,
//   OfficeInput,
//   hourInput
// );

// return employeeInput;

// function to check input is empty or full
// }

// 4.
// function for check and return boolean value
function isRequire(value) {
  if (!value.trim()) {
    return false;
  }
  return true;
}

// function check email with regex is matched or none
function isAccount(input) {
  // all characters with limited 4 - 6 length
  let regex = /^.{4,6}$/;
  return regex.test(input);
}

// function check name with regex is matched or none
function isName(input) {
  // letter a-z, A-Z without limited length. Accept spacing between word
  let regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  return regex.test(input);
}

//function check email
function isEmail(input) {
  let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(input);
}

// function to checking password: ít nhất 8 ký tự, có ít nhất 1 chữ hoa, chữ thường, 1 số, 1 kí tự đặc biệt
function isPassword(input) {
  let regex =
    /^(?=.*[A-Z])(?=.*[!&%\/()=\?\^\*\+\]\[#><;:,\._-|@])(?=.*[0-9])(?=.*[a-z]).{8,40}$/;

  return regex.test(input);
}

// function to check salary
function isSalary(input) {
  if (input < 1000000 || input > 20000000) {
    return false;
  }
  return true;
}

// function to check hours
function isHours(input) {
  if (input < 80 || input > 200) {
    return false;
  }
  return true;
}

//  function to validate value input of form
function validateLogIn() {
  // set flag is true
  let isvalid = true;

  // DOM
  let accountInput = document.getElementById("tknv").value;
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let passWordInput = document.getElementById("password").value;
  let dateInput = document.getElementById("datepicker").value;
  let salaryInput = document.getElementById("luongCB").value;
  let OfficeInput = document.getElementById("chucvu").value;
  let hourInput = document.getElementById("gioLam").value;

  // check validate accountInput
  if (!isRequire(accountInput)) {
    isvalid = false;
    document.getElementById("tbTKNV").innerHTML = "Không được để trống";
    document.getElementById("tbTKNV").style.display = "block";
  } else if (!isAccount(accountInput)) {
    isvalid = false;
    document.getElementById("tbTKNV").innerHTML = "Không hợp lệ";
    document.getElementById("tbTKNV").style.display = "block";
  } else {
    document.getElementById("tbTKNV").innerHTML = "";
    document.getElementById("tbTKNV").style.display = "none";
  }

  // check validate nameInput
  if (!isRequire(nameInput)) {
    isvalid = false;
    document.getElementById("tbTen").innerHTML = "Không được để trống";
    document.getElementById("tbTen").style.display = "block";
  } else if (!isName(nameInput)) {
    isvalid = false;
    document.getElementById("tbTen").innerHTML = "Không hợp lệ";
    document.getElementById("tbTen").style.display = "block";
  } else {
    document.getElementById("tbTen").innerHTML = "";
    document.getElementById("tbTen").style.display = "none";
  }

  // check validate emailInput
  if (!isRequire(emailInput)) {
    isvalid = false;
    document.getElementById("tbEmail").innerHTML = "Không được để trống";
    document.getElementById("tbEmail").style.display = "block";
  } else if (!isEmail(emailInput)) {
    isvalid = false;
    document.getElementById("tbEmail").innerHTML = "Không hợp lệ";
    document.getElementById("tbEmail").style.display = "block";
  } else {
    document.getElementById("tbEmail").innerHTML = "";
    document.getElementById("tbEmail").style.display = "none";
  }

  // check validate passWordInput
  if (!isRequire(passWordInput)) {
    isvalid = false;
    document.getElementById("tbMatKhau").innerHTML = "Không được để trống";
    document.getElementById("tbMatKhau").style.display = "block";
  } else if (!isPassword(passWordInput)) {
    isvalid = false;
    document.getElementById("tbMatKhau").innerHTML = "Không hợp lệ";
    document.getElementById("tbMatKhau").style.display = "block";
  } else {
    document.getElementById("tbMatKhau").innerHTML = "";
    document.getElementById("tbMatKhau").style.display = "none";
  }

  // check validate dateInput
  if (!isRequire(dateInput)) {
    isvalid = false;
    document.getElementById("tbNgay").innerHTML = "Không được để trống";
    document.getElementById("tbNgay").style.display = "block";
  } else {
    document.getElementById("tbNgay").innerHTML = "";
    document.getElementById("tbNgay").style.display = "none";
  }

  // check validate salaryInput
  if (!isRequire(salaryInput)) {
    isvalid = false;
    document.getElementById("tbLuongCB").innerHTML = "Không được để trống";
    document.getElementById("tbLuongCB").style.display = "block";
  } else if (!isSalary(salaryInput)) {
    isvalid = false;
    document.getElementById("tbLuongCB").innerHTML = "Lương không hợp lệ";
    document.getElementById("tbLuongCB").style.display = "block";
  } else {
    document.getElementById("tbLuongCB").innerHTML = "";
    document.getElementById("tbLuongCB").style.display = "none";
  }

  // check validate OfficeInput
  if (!isRequire(OfficeInput)) {
    isvalid = false;
    document.getElementById("tbChucVu").innerHTML = "Không được để trống";
    document.getElementById("tbChucVu").style.display = "block";
  } else {
    document.getElementById("tbChucVu").innerHTML = "";
    document.getElementById("tbChucVu").style.display = "none";
  }

  // check validate hourInput
  if (!isRequire(hourInput)) {
    isvalid = false;
    document.getElementById("tbGiolam").innerHTML = "Không được để trống";
    document.getElementById("tbGiolam").style.display = "block";
  } else if (!isHours(hourInput)) {
    isvalid = false;
    document.getElementById("tbGiolam").innerHTML = "Giờ làm không hợp lệ";
    document.getElementById("tbGiolam").style.display = "block";
  } else {
    document.getElementById("tbGiolam").innerHTML = "";
    document.getElementById("tbGiolam").style.display = "none";
  }

  // create Object
  if (isvalid) {
    let employeeInput = new Employee(
      accountInput,
      nameInput,
      emailInput,
      passWordInput,
      dateInput,
      +salaryInput,
      OfficeInput,
      +hourInput
    );
    return employeeInput;
  }
  return isvalid;
}

// 7. remove employee
function removeEmployee(account) {
  // find object employee
  listEmploy = listEmploy.filter((value) => {
    return value.accountE !== account;
  });

  showList(listEmploy);
}

// 8. update employee

function upDateEmployee() {

  let employee = validateLogIn()
  if(!employee){
    return
  }

  let index =  listEmploy.findIndex((value)=>{
    return value.accountE === employee.accountE
  })

  listEmploy[index] = employee

  showList(listEmploy)
  $("#myModal").modal("hide");
}



// Fill information of employee into form 
function selectorEmployee(account) {
  let selectEmployee = listEmploy.find((value) => {
    return value.accountE;
  });

  let accountInput = (document.getElementById("tknv").value =
    selectEmployee.accountE);
  let nameInput = (document.getElementById("name").value = selectEmployee.nameE);
  let emailInput = (document.getElementById("email").value =
    selectEmployee.emailE);
  let passWordInput = (document.getElementById("password").value =
    selectEmployee.passwordE);
  let dateInput = (document.getElementById("datepicker").value =
    selectEmployee.dateE);
  let salaryInput = (document.getElementById("luongCB").value =
    selectEmployee.basicSalaryE);
  let OfficeInput = (document.getElementById("chucvu").value =
    selectEmployee.officeE);
  let hourInput = (document.getElementById("gioLam").value =
    selectEmployee.hourWorkE);

    document.getElementById("tknv").disabled = true;

    // document.getElementById("btnAdd").disabled = true;
    $("#myModal").modal("show");
}


// 9. find employee with classification
function  findEmployee() {
  let seek = document.getElementById("searchName").value
  seek = seek.trim().toLowerCase()

  let newListSeek = listEmploy.filter((value)=>{
    let range = value.typeE.trim().toLowerCase()
    return range.includes(seek)
  })

  showList(newListSeek)
}