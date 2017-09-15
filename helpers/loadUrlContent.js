// TODO: Process this server-side?
// TODO: Cache URL text on a server

const loadUrlContent = (urlString) => {
	let url = new URL(urlString)
	let corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
	var self = this;
	return fetch(corsProxyUrl + url)
			.then(getUrlContent)
			.then(processContent);
}

const getUrlContent = (res)  => {
	return res.text();
}

const processContent = (html) => {
	let page = new DOMParser().parseFromString(html, 'text/html'),
		selectors, title, text, elements, elementsArr;
	title = page.head.querySelector('title').textContent;
	// if Medium post (Medium posts aren't always on medium.com)
	if(page.head.querySelector('meta[property="al:ios:app_name"][content="Medium"]')) {
		selectors = [
			'.postArticle-content h1',
			'.postArticle-content h2',
			'.postArticle-content h3',
			'.postArticle-content h4',
			'.postArticle-content h5',
			'.postArticle-content p',
		];
	} else {
		selectors = ['main'];
	}
	elements = page.body.querySelectorAll(selectors.join(', ')),
	elementsArr = [];
	for(var i = 0; i < elements.length; ++i) {
		elementsArr.push(elements[i].textContent);
	}
	console.log(elementsArr);
	text = elementsArr.join(' ');
	console.log(text);
	return text;
}


export { loadUrlContent };
