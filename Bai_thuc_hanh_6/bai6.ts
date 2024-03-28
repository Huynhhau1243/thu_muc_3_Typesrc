// let count00: number = 10;

// count00 = 100;
// typescr nó tự động đoán cho chúng ta kiểu nếu đúng nó kh báo lỗi


let test = ["hello","Huỳnh Hậu", "Js", 97, false ] // nếu khởi tạo mảng có một số nguyên
test.push(25);  test.push(true)
console.log(test)
// console.log(count00)


// so sánh giữa type annotations và type inference 
// type annotations là mình khai báo một biến và suốt vòng đời mình chỉ muốn nó 1 kiểu thì thằng này làm rất tốt 
// còn mình muốn biến của mình có nhiều kiểu thì thằng inference đảm nhiệm vai trò này rất tốt 