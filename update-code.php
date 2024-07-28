<?php
// الحصول على بيانات الكودات الجديدة من الطلب
$data = json_decode(file_get_contents('php://input'), true);

// تحديث ملف codes.json
file_put_contents('codes.json', json_encode($data));

echo json_encode(['status' => 'success']);
?>