const links = ['website', 'socialFacebook', 'socialInstagram', 'socialVk', 'socialOk', 'socialYoutube', 'socialLinkedin', 'socialTwitter', 'phoneWork', 'emailWork', 'tiktok', 'tenchat', 'tg'];
const noLinks = ['organization', 'organizationField'];

function isLoad() {
var vcard = document.querySelector('.card');

	if (!!vcard) {
		console.log('1');
		for ( let i = 0; i < (links.length); i++) {
			if ((document.getElementById(links[i]).getAttribute('href').indexOf('[[$' + links[i] + ']]') != -1) || 
				!(!!document.getElementById(links[i]).getAttribute('href')) || 
				(document.getElementById(links[i]).getAttribute('href') == '')) {
				document.getElementById(links[i]).classList.add('disable');
			};
		};
		if ((document.getElementById('wa').getAttribute('href') == 'https://wa.me/') ||
		(document.getElementById('wa').getAttribute('href') == 'https://wa.me/[[$wa]]')) {
			document.getElementById('wa').classList.add('disable');
		};
		if ((document.getElementById('viber').getAttribute('href') == 'viber://chat?number=') || 
		(document.getElementById('viber').getAttribute('href') == 'viber://chat?number=[[$viber]]')) {
			document.getElementById('viber').classList.add('disable');
		};
		if ((document.getElementById('socialSkype').getAttribute('href') == 'skype:?chat') ||
			(document.getElementById('socialSkype').getAttribute('href') == 'skype:[[$socialSkype]]?chat')) {
			document.getElementById('socialSkype').classList.add('disable');
		};
		for ( let i = 0; i < (noLinks.length); i++) {
			if (document.getElementById(noLinks[i]).innerText.trim() == '[[$' + noLinks[i] + ']]') {
				document.getElementById(noLinks[i]).classList.add('disable');
			};
		};
		
		document.getElementById('organizationField').innerHTML = document.getElementById('organizationField').innerText.trim().replace(/^\n/, '').replace(/\n$/, '').replace(/\n/g, '<br>');
		
		document.getElementById('innerAddress').innerHTML = document.getElementById('innerAddress').innerText.replace('[[$country]], ', '').replace('[[$city]], ', '').replace('[[$address]]', '');
		if (document.getElementById('innerAddress').innerText.trim() == '') {
			document.getElementById('address').classList.add('disable');
		};
		document.getElementById('website').setAttribute('href', 'https://' + document.getElementById('website').getAttribute('href').replace(/^https:\/\//, '').replace(/^http:\/\//, ''));
		document.getElementById('viber').setAttribute('href', document.getElementById('viber').getAttribute('href').replace(/\+/, '%2B'));
		
		var cache = Math.floor(Math.random() * 1000);
		document.getElementById('card-logo-img').setAttribute('src', document.getElementById('card-logo-img').getAttribute('src') + '?' + cache);
		clearInterval(timer);
	}
	document.querySelector('main').classList.remove('disable');
;}
var timer = setInterval(isLoad, 300);

function copyLink() {
	var url = document.location.href + '';
	navigator.clipboard.writeText(url);	
	document.querySelector('.link-copy').classList.add('notify');
	let timerId = setTimeout(() => document.querySelector('.link-copy').classList.remove('notify'), 1200);
}

function presentationDisable() {
	console.log(presentation_url);
	if ((presentation_url == '') || (presentation_url == '[[$presentation]]')) {
	document.querySelector('#present-bottom').classList.add('disable');
}
}

function renderManagers() {
	if ((managers != '') && (managers != '[[$managers]]')) {
		list = JSON.parse(managers.replace(/undefined/gm, ''));
		console.log(list);
	
		if (list.length > 0) {
			for ( let i = 0; i < (list.length); i++) {
				renderManagerItem(list[i]);
			};
		} 
	} else {
		document.querySelector('.contacts-event').classList.toggle('disable');
	}
}

function renderManagerItem(manager) {
	let wrapper = document.createElement('a');
	wrapper.classList.add('contacts-event__list__item');
	wrapper.setAttribute('href', manager.url);
		
	let wrapper2 = document.createElement('div');
	wrapper.appendChild(wrapper2);
		
	let nameElem = document.createElement('div');
	nameElem.classList.add('contacts-event__list__item__name');
	nameElem.innerText = manager.lastName + ' ' + manager.firstName;
	wrapper2.appendChild(nameElem);
	
	let positionElem = document.createElement('div');
	positionElem.classList.add('contacts-event__list__item__info');
	positionElem.innerText = manager.position;
	wrapper2.appendChild(positionElem);
		
	let photoElem = document.createElement('div');
	photoElem.classList.add('contacts-event__list__item__photo');
	if (manager.photoPresent) {
		photoElem.innerHTML = "<img src=\"" + manager.url + "/photo.png\" />";
	} else {
		photoElem.innerHTML = "<img src=\"../_img/svg/ico-person.svg\" />";
	};
	wrapper.appendChild(photoElem);
		
	document.querySelector('.contacts-event__list').appendChild(wrapper);
}	
