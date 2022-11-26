function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function (nv) {
        this.arr.push(nv);
    };

    this.timViTriNhanVien = function (tknv) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i];
            if (nv.tknv === tknv) {
                index = i;
                break;
            }
        }
        return index;
    };

    this.xoaNhanVien = function (tknv) {
        var index = this.timViTriNhanVien(tknv);
        if (index != -1) {
            this.arr.splice(index, 1);
        }
    };

};