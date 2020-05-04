var keyLocalItem = 'danhSachItemGioHang';

function chuyenItemThanhHtml(item) {
    var sanPham = searchProducByID(item.ID);
    console.log(sanPham);
    html = '';
    html += '<div class="khungDanhSachItem">';
    html += '   <div class="khungItem">';
    html += '       <div class="hinhAnhItem">';
    html += '           <img src="' + sanPham.hinhAnh + '" alt="">';
    html += '       </div>';
    html += '       <div class="tenItem">';
    html += '           <p>' + sanPham.ten + '</p>';
    html += '       </div>';
    html += '       <div class="GiaItem">';
    html += '           <p>' + sanPham.tinhGiaBan() + '</p>';
    html += '       </div>';
    html += '       <div class="soLuongItem">';
    html += '           <input type="number" class="soLuong" id="' + sanPham.ID + '" value="' + item.soLuong + '" onchange="luuSoLuong(' + item.ID + ')">';
    html += '       </div>';
    html += '       <p class="thanhTien"><input type="text" value="' + sanPham.tinhGiaBan() * item.soLuong + '" readonly></p>';
    html += '       <button class="bnt" onclick="deleteItem(' + sanPham.ID + ')"><img src="images/delete.png"></button>';
    html += '   </div>';
    html += '</div>';

    return html;
}

function chuyenDSItemThanhHtml(listItems) {
    var htmlAll = '';
    for (let i = 0; i < listItems.length; i++) {
        var item = listItems[i];
        htmlAll += chuyenItemThanhHtml(item);
    }

    return htmlAll;
}

function deleteItem(ID) {
    var jonListItemsFromLocal = localStorage.getItem('danhSachItemGioHang');
    var listItems = JSON.parse(jonListItemsFromLocal);
    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].ID == ID) {
            listItems.splice(i, 1);
            break;
        }
    }
    saveListItemsToLocal(listItems);
    showItems();
}

function luuSoLuong(ID) {
    var jonListItemsFromLocal = localStorage.getItem('danhSachItemGioHang');
    var listItems = JSON.parse(jonListItemsFromLocal);

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].ID == ID) {
            listItems[i].soLuong = document.getElementById(listItems[i].ID).value;
            break;
        }
    }
    saveListItemsToLocal(listItems);
    showItems();
}

function getLisItemsFromLocal() {
    var jonListItemsFromLocal = localStorage.getItem(keyLocalItem);
    var listItems = JSON.parse(jonListItemsFromLocal);

    return listItems;
}