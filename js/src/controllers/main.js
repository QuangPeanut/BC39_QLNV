var dsnv = new DanhSachNhanVien();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

// Thêm NV
getEle("btnThemNV").onclick = function () {
    var nv = LayThongTinNhanVien(true);
    if (nv) {
        dsnv.themNhanVien(nv);
        renderTable(dsnv.arr);
        setLocalStorage();
    }
};

function LayThongTinNhanVien(isAdd) {
    var tknv = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    // Khởi tạo lớp đối tượng nhân viên
    var nv = new NhanVien(tknv, name, email, password, datepicker, luongCB, chucvu, gioLam)

    return nv;
}

// // flag: cờ
// var isValid = true;

// // Kiểm tra ký tự
// if (isAdd) {
//     validation.KiemTraRong(tkvn, "errortknv", "(*) Vui lòng nhập mã nhân viên")
// }

function renderTable(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        var nv = data[i];
        content += `
        <tr>
        <td>${nv.tknv}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.datepicker}</td>
        <td>${nv.chucvu}</td>
        <td>${nv.luongCB}</td>
        <td>${nv.xepLoai}</td>
        <td> 
           <button class="btn btn-success" onclick="deleteNV('${nv.tknv}')"> Delete </button>
           <button class="btn btn-danger" onlick="editNV('${nv.tknv}')"> Edit </button>
        </td>
        </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = content;
}

// Delete NV
function deleteNV(tknv) {
    dsnv.xoaNhanVien(tknv);
    renderTable(dsnv.arr);
    setLocalStorage();
}



function setLocalStorage() {
    // Convert JSON ==> String
    var dataString = JSON.stringify(dsnv.arr);
    // Lưu data xuống LocalStorage
    localStorage.setItem("DSNV", dataString)
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        // Convert string ==> JSON
        dsnv.arr = JSON.parse(dataString);
        // render lại table
        renderTable(dsnv.arr);
    }
}