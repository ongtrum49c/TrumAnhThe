// JavaScript này không cần thiết cho các hiệu ứng hover đã có trong CSS, nhưng nếu bạn muốn xử lý các sự kiện hoặc thêm tính năng
// như thay đổi giá trị, thông báo, hay các tính năng động khác, bạn có thể sử dụng phần này.

// Ví dụ về cách mở rộng tính năng động với JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Thêm sự kiện click vào các sản phẩm
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', function () {
            const productName = this.querySelector('.product-info h3').innerText;
            const productPrice = this.querySelector('.product-info p').innerText;
            alert(`Bạn đã chọn: ${productName}\nGiá: ${productPrice}`);
        });
    });
});
