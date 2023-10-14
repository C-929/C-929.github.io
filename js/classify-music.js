let tabName = document.querySelector(".col_nav");  
let lis = tabName.querySelectorAll("li");  
let items = document.querySelectorAll(".item");  
  
for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('mouseover', () => {  
        // 消除冗余的循环，直接利用当前点击的索引  
        lis.forEach(value => value.className = '');  
        lis[i].className = 'col_focus';  
          
        items.forEach(value => value.className = 'item');  
        items[i].className = 'item show';
      });
}