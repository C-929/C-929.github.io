// 获取左边大图的元素
let b = document.querySelector(".b")
// 获取右边小图的所有元素
let bookimg = document.getElementsByClassName("bookimg")

let time 
let index = 0

// 设置一个重置函数
let a = function () {
    for (let i = 0; i < bookimg.length; i++) {
        bookimg[i].className = "bookimg"
    }
}
// 设置一个选中函数
let aa = function () {
    // 先代入重置函数
    a()
    bookimg[index].className = "bookimg dd"
}
// 设置启动轮播图的时间函数
function ts() {
    time = setInterval(function () {
        aa()
        index++
        b.style.backgroundImage = "url('./images/books/book" + [index] + ".jpg')"
        if (index == bookimg.length) {
            index = 0
        }
    }, 1500);
}
for (let i = 0; i < bookimg.length; i++) {
    // 鼠标移动到当前小图片上时触发
    bookimg[i].onmousemove = function () {
        // 鼠标移动到当前小图片时右边大图片变成当前的小图片
        b.style.backgroundImage = "url('./images/books/book" + [i + 1] + ".jpg')"
        // 鼠标移动到小图片上面时关闭定时器并重置定时，
        // 鼠标移开后再继续执行
        a()
        clearInterval(time)
        index = i + 1
        ts()
    }
}
// 执行轮播图
ts()