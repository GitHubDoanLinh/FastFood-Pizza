# React + Vite

Yêu cầu dự án 
- Người dùng có thể đặt một hoặc nhiều pizza từ thực đơn 
- không yêu cầu tài khoản người dùng => không có chức năng đăng nhập 
- người dùng chỉ việc nhập tên của họ trước khi bắt đầu sử dụng 
- menu pizza có thể thay đổi theo thời gian
- menu pizza được tải từ một API đã được thực hiện sẵn 
- cần một giỏ hàng có thể "nhét" nhiều pizza vào đó trước khi khách đặt hàng
- các yêu cầu trước khi order chỉ là (tên, sđt, địa chỉ)
- nếu có thể, GPS cũng nên được cung cấp
- người dùng có thể đánh dấu đơn hàng của họ là "ưu tiên" và giá = 20% giỏ hàng
- các đơn hàng (orders) được thực hiện bằng cách tạo request POST kèm theo tất cả data đơn hàng vào trong API
- phương thức thanh toán là trả tiền khi nhận hàng
- mỗi đơn hàng sẽ nhận được một mã nhận dạng duy nhất, sẽ được hiển thị ở đâu đó trong giao diện 
- người dùng có thể tra cứu trạng thái đơn hàng dựa trên mã nhận dạng
- người dùng có thể đánh đâu đơn hàng của mình là ưu tiên ngay cả khi đã được đặt