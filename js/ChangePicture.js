function changeImage(src) {
    const images = document.querySelectorAll('[id^="bigImage"]'); // انتخاب تمام المان‌هایی که ID آنها شروع با "bigimage" است
    
    images.forEach((image) => {
        image.src = src; // تغییر خصوصیت src هر تصویر
    });
}

