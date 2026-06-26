// 1. Ẩn các banner, vùng hiển thị quảng cáo trả phí và lớp phủ tĩnh (overlay)
const style = document.createElement('style');
style.innerHTML = `
    ytd-ad-slot-renderer,
    ytd-promoted-sparkles-web-renderer,
    ytd-compact-promoted-video-renderer,
    ytd-display-ad-renderer,
    ytd-banner-promo-renderer,
    .ytd-in-feed-ad-layout-renderer,
    .ytp-ad-overlay-container,
    .ytp-ad-message-container,
    #masthead-ad {
        display: none !important;
    }
`;
document.head.appendChild(style);

// 2. Xử lý quảng cáo dạng video ngắt ngang lúc đang xem
setInterval(() => {
    // Tự động nhấn nút "Skip Ads" (Bỏ qua quảng cáo) nếu xuất hiện
    const skipButtons = document.querySelectorAll('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
    if (skipButtons.length > 0) {
        skipButtons.forEach(btn => btn.click());
    }

    // Tự động tua nhanh qua các quảng cáo bắt buộc (loại không cho skip)
    const adBadge = document.querySelector('.ytp-ad-text, .ytp-ad-preview-text, .ytp-ad-badge');
    const video = document.querySelector('.video-stream.html5-main-video');
    if (adBadge && video) {
        // Ép thời gian phát hiện tại bằng với tổng thời lượng video quảng cáo để kết thúc ngay lập tức
        if (!isNaN(video.duration)) {
            video.currentTime = video.duration;
        }
    }

    // Tự động đóng các khung quảng cáo nhỏ bật lên che khuất bên dưới màn hình video
    const overlayCloseButtons = document.querySelectorAll('.ytp-ad-overlay-close-button');
    if (overlayCloseButtons.length > 0) {
        overlayCloseButtons.forEach(btn => btn.click());
    }
}, 300); // Quét liên tục mỗi 300 mili-giây (0.3 giây) để phản ứng ngay lập tức
