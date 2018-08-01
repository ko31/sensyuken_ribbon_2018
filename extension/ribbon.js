window.addEventListener("load", function() {
    var url = location.href;
    var ribbon;
    ribbon = '<style>#forkongithub a{background:#EE1F1D;color:#fff;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:0.7rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#F8BD33;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:320px){#forkongithub{position:fixed;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:99999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="http://www.asahi.com/koshien/">第100回全国高校野球選手権出場校</a></span>';
    document.body.innerHTML = document.body.innerHTML + ribbon;
}, false);
