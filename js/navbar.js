// 响应式导航栏——控制菜单图标的显示
// 在文档中查找具有类名'menubtn'的第一个元素，并将其作为常量赋值给变量'menuBtn'
const menuBtn = document.querySelector('.menubtn');
const dropDownList = document.querySelector('.dropdown_list');
// 当一个被称为'toggleBtn'的HTML元素被点击时，会触发函数
menuBtn.onclick = function () {
    // 切换类。在 dropDownList 这个元素的类列表中添加或删除 'open' 这个类。
    // 如果 'open' 这个类已经存在于元素的类列表中，那么这行代码将会删除它；
    // 如果 'open' 这个类不存在，那么这行代码将会添加它。
    dropDownList.classList.toggle('open');
}