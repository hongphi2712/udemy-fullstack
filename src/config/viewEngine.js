const path = require('path');
const express = require('express');

const configviewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));  // ✅ Sửa lỗi
    app.set('view engine', 'ejs');

    // Cấu hình thư mục chứa file tĩnh (CSS, JS, ảnh)
    app.use(express.static(path.join('./src', 'public'))); // ✅ Sửa lỗi
};

module.exports = configviewEngine;
