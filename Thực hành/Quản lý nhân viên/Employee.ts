import { Employee } from "./main";

let nhanvien1 = new Employee('Lê Minh Hằng', 1, '25/05/1990', 'hang_le@gmail.com', 95665513231)
let nhanvien2 = new Employee('Đặng Thanh Sơn', 0, '22/07/2002', 'Son_dang@gmail.com', 9563123123)
let nhanvien3 = new Employee('Trần Thanh Bình', 0, '25/05/2009', 'Binh@gmail.com', 978713231)

let employeeList : Employee [] = [];
employeeList.push(nhanvien1,nhanvien2,nhanvien3);
// console.log(employeeList)

function showEmployee(employee: Employee){
    console.log(employee)
}

employeeList.forEach(showEmployee);