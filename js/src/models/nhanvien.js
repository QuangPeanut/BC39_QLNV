function NhanVien(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
    // property
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;
    this.tongLuong = TinhLuongNhanVien(_chucvu);
    this.xepLoai = checkXL();

    // method
    function TinhLuongNhanVien(cv) {
        if (cv === "Sếp") {
            return _luongCB * 3;
        }
        if (cv === "Trưởng phòng") {
            return _luongCB * 2;
        }
        return _luongCB;
    };

    function checkXL(g) {
        if (g >= 192) {
            return "Nhân viên Xuất Sắc";
        }
        if (192 > g >= 176) {
            return "Nhân viên Giỏi";
        }
        if (176 > g > 160) {
            return "Nhân viên Khá";
        }
        if (160 > g)
            return "Nhân vien Trung Bình";
    };
    console.log(checkXL);

}