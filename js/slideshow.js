var slideIndex = 0; // 初始化幻灯片索引为0  
showSlides(); // 调用显示幻灯片函数  

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // 获取所有幻灯片元素  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 隐藏所有幻灯片  
    }
    slideIndex++; // 增加幻灯片索引值  
    if (slideIndex > slides.length) { // 如果幻灯片索引超过幻灯片数量，则重新设置为0  
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block"; // 显示当前幻灯片  
    setTimeout(showSlides, 2000); // 设置延迟定时器，2秒后再次调用显示幻灯片函数，实现轮播效果
}