setInterval(() => {
    // 1. Tự động click vào nút "Skip Ads" hoặc "Bỏ qua quảng cáo" nếu nó xuất hiện
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, .ytp-ad-skip-button-modern');
    if (skipButton) {
        skipButton.click();
    }

    // 2. Tua nhanh qua các video quảng cáo bắt buộc (loại không có nút Bỏ qua)
    const adText = document.querySelector('.ytp-ad-text, .ytp-ad-preview-text');
    if (adText) {
        const video = document.querySelector('.video-stream.html5-main-video');
        if (video) {
            video.currentTime = video.duration; // Ép video quảng cáo chạy đến giây cuối cùng
        }
    }
}, 500); // Tần suất quét là 500 mili-giây (0.5 giây) 1 lần
