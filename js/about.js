let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px'
  moon.style.top = value * 1.05 + 'px'
  mountains_behind.style.top = value * 0.5 + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 4 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})

var map = new BMapGL.Map("container");          // 创建地图实例 
var point = new BMapGL.Point(115.939398, 28.683913);  // 创建点坐标 
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.setHeading(64.5);   //设置地图旋转角度
map.setTilt(73);       //设置地图的倾斜角度
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
map.addControl(cityCtrl);