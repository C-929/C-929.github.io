let change = document.querySelector(".change")
let text = document.querySelector(".text")
let content = document.querySelectorAll(".content")
let icons = document.querySelectorAll("i")
change.addEventListener('click', function () {
    for (let i = 0; i < 2; i++) {
        content[i].classList.toggle('show')
        icons[i].classList.toggle('i_show')
    }
    if (text.textContent == '收起'){
        text.textContent = '展开'
    } else {
        text.textContent = '收起'
    }
    
})

// function init() {  
//     const changes = document.querySelectorAll(".change");  
//     const content = document.querySelectorAll(".content");  
//     const icons = document.querySelectorAll("i");  
      
//     changes.forEach((change, index) => {  
//         change.addEventListener('click', () => {  
//             // Toggle the 'show' class of the next two .content elements  
//             content.slice(index * 2, index * 2 + 2).forEach(contentItem => {  
//                 contentItem.classList.toggle('show');  
//                 icons[index * 2 + contentItem.dataset.index].classList.toggle('i_show');  
//             });  
              
//             // Toggle the textContent of the clicked .change element  
//             change.textContent = change.textContent === '收起' ? '展开' : '收起';  
//         });  
//     });  
// }  
  
// init();