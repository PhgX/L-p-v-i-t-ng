"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let nhanvien1 = new main_1.Employee('Lê Minh Hằng', 1, '25/05/1990', 'hang_le@gmail.com', 95665513231);
let nhanvien2 = new main_1.Employee('Đặng Thanh Sơn', 0, '22/07/2002', 'Son_dang@gmail.com', 9563123123);
let nhanvien3 = new main_1.Employee('Trần Thanh Bình', 0, '25/05/2009', 'Binh@gmail.com', 978713231);
let employeeList = [];
employeeList.push(nhanvien1, nhanvien2, nhanvien3);
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
//# sourceMappingURL=Employee.js.map