const vault = document.querySelector('.vault');
const pagination = document.querySelector('#pagination');

// 每页显示的图片数量  
const imagesPerPage = 3;

// 获取所有图片元素  
const movie = Array.from(vault.querySelectorAll('.movie'));

// 总页数  
const totalPages = Math.ceil(movie.length / imagesPerPage);

// 当前页码  
let currentPage = 1;

// 显示当前页的图片  
function showPage(page) {
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = movie.slice(startIndex, endIndex);

    // 清空画廊和分页器的内容  
    vault.innerHTML = '';
    pagination.innerHTML = '';

    // 添加当前页的图片到画廊,image是参数
    currentImages.forEach(image => {
        vault.appendChild(image);
    });

    // 添加分页器的按钮  
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        if (i === page) {
            button.classList.add('active');
        }
        button.addEventListener('click', function () {
            showPage(i);
        });
        pagination.appendChild(button);
    }
}

// 初始显示第一页的图片  
showPage(1);  