    // 获取页面中所有的输入框元素
    const inputs = document.querySelectorAll('.input-field')
    // 获取页面中所有的切换按钮元素
    const toggle_btn = document.querySelectorAll('.toggle')
    // 获取页面中的main元素
    const main = document.querySelector('main')
    // 获取页面中所有的小圆点元素
    const bullets = document.querySelectorAll('.bullets span')
    // 获取页面中所有的图片元素
    const images = document.querySelectorAll('.image')
 
    // 为所有输入框元素添加获取焦点和失去焦点的事件监听器
    inputs.forEach(inp => {
        inp.addEventListener('focus', () => {
            inp.classList.add('active')
        })
        inp.addEventListener('blur', () => {
            if (inp.value != '') return
            inp.classList.remove('active')
        })
    })
 
    // 为所有切换按钮元素添加点击事件监听器
    toggle_btn.forEach(btn => {
        btn.addEventListener('click', () => {
            main.classList.toggle('sign-up-mode')
        })
    })
 
    // 定义moveSlider函数，用于实现图片轮播和文本滑动的效果
    function moveSlider() {
        // 获取当前点击的小圆点的索引值
        let index = this.dataset.value;
        // 根据索引值获取对应的图片元素
        let currentImg = document.querySelector(`.img-${index}`)
        // 将其他图片元素的show类名移除，将当前图片元素添加show类名
        images.forEach(img => {
            img.classList.remove('show')
        })
        currentImg.classList.add('show')
        // 获取文本滑动元素
        const textSlider = document.querySelector('.text-group')
        // 将文本滑动元素的transform属性设置为当前索引值对应的位置
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`
        // 将其他小圆点的active类名移除，将当前小圆点添加active类名
        bullets.forEach(bullet => {
            bullet.classList.remove('active')
        })
        this.classList.add('active')
    }
 
    // 为所有小圆点元素添加点击事件监听器
    bullets.forEach(bullet => {
        bullet.addEventListener('click', moveSlider)
    })

    function yzm(selector,w,h){
        //随机数的生成
        function rn(min,max){
            return parseInt(Math.random()*(max-min)+min)
        }
        //随机颜色的生成
        function rc(min,max){
            var r = rn(min,max);
            var g = rn(min,max);
            var b = rn(min,max);
            return `rgb(${r},${g},${b})`
        }
        var w = w;
        var h = h;
        var canvas = document.querySelector(selector);
        var ctx = canvas.getContext('2d');
        //绘制背景颜色
        ctx.fillStyle = rc(180,230);
        ctx.fillRect(0,0,w,h);
        //随机字符串
        var pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        //取出随机数
        for(var i= 0;i < 4; i++){
            var c = pool[rn(0,pool.length)]
            //字体大小
            var fs = rn(18,40)
            //旋转角度
            var deg = rn(-30,30);
            ctx.font = fs + 'px Simhei';
            ctx.textBaseline = 'top';
            //字体颜色
            ctx.fillStyle = rc(80,150);
            ctx.save()
            ctx.translate(30*i+15,15);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(c,-12,-12)
            ctx.restore()
        }

        //随机生成干扰线
         for(var i=0;i<5;i++){
            ctx.beginPath();
            ctx.moveTo(rn(0,w),rn(0,h));
            ctx.lineTo(rn(0,w),rn(0,h));
            ctx.strokeStyle = rc(140,200);
            ctx.closePath();
            ctx.stroke()
         }
         //随机生成干扰圆点
         for(var i=0;i<40;i++){
            ctx.beginPath();
            ctx.arc(rn(0,w),rn(0,h),1,0,2*Math.PI);
            ctx.closePath();
            ctx.fillStyle = rc(140,200);
            ctx.fill();
         }
    }
    yzm('#canvas',120,40)