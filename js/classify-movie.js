let listName = document.querySelector(".navlist");  
let li = listName.querySelectorAll("li");  
let items = document.querySelectorAll(".item");  
  
for(let i = 0; i < li.length; i++){  
    li[i].onclick = function(){
        // 消除冗余的循环，直接利用当前点击的索引  
        li.forEach(value => value.className = '');  
        li[i].className = 'col_focus';  
          
        items.forEach(value => value.className = 'item');  
        items[i].className = 'item show';  
    }  
}