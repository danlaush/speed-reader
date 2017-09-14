const loadUrl = (urlString) => {
	let url = new URL(urlString)
	let corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
	var self = this;
	console.log('loadUrl()');
	return fetch(corsProxyUrl + url);
}

const getUrlContent = (res)  => {
	console.log('getUrlContent()');
	return res.text();
}

const processContent = (html) => {
	console.log('processContent()');
	let page = new DOMParser().parseFromString(html, 'text/html');
	// if medium.com {
	let text = page.body.querySelector('.postArticle-content').textContent;
	// }
	console.log('second then');
	console.log(text);
	return text;
}


export { loadUrl, getUrlContent, processContent };
