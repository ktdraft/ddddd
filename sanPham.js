var keyListProducsLocal = 'danhSachSanPham';

function newSmartPhone(ten, hinhAnh, giaGoc, phamTramGiamGia, khuVucBan, ID) {
    var product = new Object();
    product.ten = ten;
    product.hinhAnh = hinhAnh;
    product.giaGoc = giaGoc;
    product.phamTramGiamGia = phamTramGiamGia;
    product.khuVucBan = khuVucBan;
    if (ID != null) {
        product.ID = ID;
    } else {
        product.ID = UUID();
    }

    product.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (1 - this.phamTramGiamGia * 0.01);
        return giaBan;
    }

    product.fromJSONS = function (jsonListProducts) {
        var listProductsFull = [];
        var listProducts = JSON.parse(jsonListProducts);

        for (var i = 0; i < listProducts.length; i++) {
            var product = listProducts[i];
            var productFull = newSmartPhone(product.ten, product.hinhAnh, product.giaGoc, product.phamTramGiamGia, product.khuVucBan, product.ID);
            listProductsFull[i] = productFull;
        }
        return listProductsFull;
    }

    return product;
}

function createListProducts() {
    var iphone111 = newSmartPhone('Iphone 11 Pro Max', 'images/ip11.png', 33000000, 10, 'Hà Nội', UUID());
    var iphone112 = newSmartPhone('Iphone 12 Pro Max', 'images/ip11.png', 34000000, 10, 'Hà Nội', UUID());
    var iphone113 = newSmartPhone('Iphone 13 Pro Max', 'images/ip11.png', 35000000, 10, 'Hà Nội', UUID());
    var iphone114 = newSmartPhone('Iphone 14 Pro Max', 'images/ip11.png', 36000000, 10, 'Hà Nội', UUID());
    var iphone115 = newSmartPhone('Iphone 15 Pro Max', 'images/ip11.png', 37000000, 10, 'Hà Nội', UUID());
    var HWNova3i1 = newSmartPhone('Huawei Nova 3i', 'images/nava3i.png', 6000000, 15, 'Sài Gòn', UUID());
    var HWNova3i2 = newSmartPhone('Huawei Nova 4i', 'images/nava3i.png', 7000000, 15, 'Sài Gòn', UUID());
    var HWNova3i3 = newSmartPhone('Huawei Nova 5i', 'images/nava3i.png', 8000000, 15, 'Sài Gòn', UUID());
    var HWNova3i4 = newSmartPhone('Huawei Nova 6i', 'images/nava3i.png', 9000000, 15, 'Sài Gòn', UUID());
    var HWNova3i5 = newSmartPhone('Huawei Nova 7i', 'images/nava3i.png', 10000000, 15, 'Sài Gòn', UUID());

    var listProducts = [];

    listProducts.push(iphone111);
    listProducts.push(HWNova3i1);
    listProducts.push(iphone112);
    listProducts.push(HWNova3i2);
    listProducts.push(iphone113);
    listProducts.push(HWNova3i3);
    listProducts.push(iphone114);
    listProducts.push(HWNova3i4);
    listProducts.push(iphone115);
    listProducts.push(HWNova3i5);

    return listProducts;
}

function chuyenSanPhamThanhHTML(product) {
    product = newSmartPhone(product.ten, product.hinhAnh, product.giaGoc, product.phamTramGiamGia, product.khuVucBan, product.ID);
    var html = '';
    // html += '<div class="khungChuaSanPham">';
    html += '   <div class="khungSanPham">';
    html += '       <div class="sanPham">';
    html += '           <div class="hinhAnhSanPham">';
    html += '               <img src="' + product.hinhAnh + '">';
    html += '           </div>';
    html += '       </div>';
    html += '       <h3 class="tenSanPham">' + product.ten + '</h3>';
    html += '       <div class="giamGia">';
    html += '           <p class="giaGoc">' + product.giaGoc + ' đ' + '</p>';
    html += '           <p class="phanTramGiamGia">(Tiết kiệm ' + product.phamTramGiamGia + '%)</p>';
    html += '       </div>';
    html += '       <p class="giaSauKhiGiam">' + product.tinhGiaBan() + ' $</p>';
    html += '       <button class="bnt" onclick="themVaoGioHang(\'' + product.ID + '\')"><p>Thêm vào giỏ</p></button>';
    html += '   </div>';
    // html += '</div>';

    return html;
}

function chuyenDSSanPhamThanhHTML(listProducts) {
    var htmlAll = '';
    for (let index = 0; index < listProducts.length; index++) {
        var product = listProducts[index];
        htmlAll += chuyenSanPhamThanhHTML(product);
    }

    return htmlAll;
}

function searchProducByID(ID) {
    var product = new Object();
    var listProducts = getListProductsFromLocal();

    for (var i = 0; i < listProducts.length; i++) {
        var thisProduct = listProducts[i];
        if (thisProduct.ID == ID) {
            product = thisProduct;
            break;
        }
    }
    product = newSmartPhone(product.ten, product.hinhAnh, product.giaGoc, product.phamTramGiamGia, product.khuVucBan, product.ID)

    return product;
}

function getListProductsFromLocal() {
    var jsonListProducts = localStorage.getItem(keyListProducsLocal);
    var listProducts = JSON.parse(jsonListProducts);

    return listProducts;
}

function UUID() {
    var ID = Math.random().toString().substr(2, 10) + String(new Date().getTime());

    return ID;
}