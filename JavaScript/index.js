// 获取手机操作系统
let detectOS = function(){
	navigator.userAgent;
	if (/android/i.test(navigator.userAgent)) {
		return "Android"; 
	}else if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
		return "IOS";
	}else{
		return navigator.platform;
	}
}