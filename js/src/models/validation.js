// function validation() {
//     this.KiemTraRong = function (value, errorId, mess) {
//         if (value === "") {
//             getEle(errorId).innerHTML = mess;
//             getEle(errorId).style.display = "block";
//             return false;
//         }
//         getEle(errorId).innerHTML = mess;
//         getEle(errorId).style.display = "none";
//         return true;
//     };

//     this.DoDaiKyTu = function (value, errorId, mess, min, max) {
//         if (min <= value.trim().lenght && value.trim().length <= max) {
//             getEle(errorId).innerHTML = mess;
//             getEle(errorId).style.display = "block";
//             return true;
//         }
//         getEle(errorId).innerHTML = mess;
//         getEle(errorId).style.display = "none";
//         return false;
//     }
// }