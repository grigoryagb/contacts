function notify() {
		document.querySelector('.link-copy').classList.toggle('notify');
	}
	
document.getElementById("mailCopy").onclick = function() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = document.querySelector('.email-link').innerText.trim();
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
	notify();
	var timerId = setTimeout(notify, 1500);
}

document.getElementById("phoneCopy").onclick = function() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = document.querySelector('.tel-link').innerText.trim();
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
	notify();
	var timerId = setTimeout(notify, 1500);
}