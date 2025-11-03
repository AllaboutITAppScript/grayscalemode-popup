    (function(){
        var s=document.createElement('style');
        s.id='grayscale-cdn';
        s.textContent='html{filter:grayscale(100%)!important;-webkit-filter:grayscale(85%)!important}';
        document.head.appendChild(s);
    })();
// สร้างและแสดง Popup ไว้อาลัยแบบเต็มหน้าจอ
function showCondolencePopup() {
    // สร้าง overlay
    const overlay = document.createElement('div');
    overlay.id = 'condolencePopup';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    // สร้าง content popup ขนาดเต็ม
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        position: relative;
        width: 95%;
        height: 95%;
        max-width: 1200px;
        max-height: 800px;
        background: #000000;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        transform: scale(0.95);
        transition: transform 0.4s ease;
    `;

    // สร้างปุ่มปิด (Font Awesome X)
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;

    // สร้างพื้นที่รูปภาพ
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        width: 100%;
        height: 100%;
        background: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `;
    imageContainer.innerHTML = `
        <img src="https://www.eda-edamame.com/wp-content/uploads/2025/10/Queen_Mom_th_eng.png" 
             alt="สมเด็จพระบรมราชชนนีพันปีหลวง" 
             style="width: 100%; height: 100%; object-fit: contain; display: block;">
    `;

    // เพิ่ม hover effect ให้ปุ่ม
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.9)';
        closeButton.style.color = '#000';
        closeButton.style.transform = 'scale(1.1)';
    });
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.background = 'rgba(0, 0, 0, 0.7)';
        closeButton.style.color = '#fff';
        closeButton.style.transform = 'scale(1)';
    });

    // ฟังก์ชันปิด popup
    function closePopup() {
        overlay.style.opacity = '0';
        popupContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 400);
    }

    // เพิ่ม event listeners
    closeButton.addEventListener('click', closePopup);
    
    // ปิดเมื่อคลิกนอก popup
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // ปิดเมื่อกดปุ่ม ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    // รวมองค์ประกอบทั้งหมด
    popupContent.appendChild(imageContainer);
    popupContent.appendChild(closeButton);
    overlay.appendChild(popupContent);
    document.body.appendChild(overlay);

    // เพิ่ม animation เข้า
    setTimeout(() => {
        overlay.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
    }, 10);
}

// เรียกใช้ popup เมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', function() {
    // แสดง popup ทันทีเมื่อโหลดหน้าเว็บ
    showCondolencePopup();
});

// ฟังก์ชันสำหรับเรียกใช้จากภายนอก
window.showCondolencePopup = showCondolencePopup;
