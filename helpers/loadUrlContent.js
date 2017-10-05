// TODO: Process this server-side?
// TODO: Cache URL text on a server

// TODO: Figure out how to process content based on URL
// At the moment, content is processed as part of a .then() 
// chain, and the content processor doesn't have access to
// the URL originally fetched, only the response HTML

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
		selectors, pageTitle, text, elements, elementsArr;
	pageTitle = page.head.querySelector('title').textContent;
	// if Medium post (Medium posts aren't always on medium.com)
	if(page.head.querySelector('meta[property="al:ios:app_name"][content="Medium"]')) {
		selectors = [
			'.postArticle-content h2',
			'.postArticle-content h3',
			'.postArticle-content h4',
			'.postArticle-content h5',
			'.postArticle-content p',
		];
	} else if (page.head.querySelector('meta[property="og:site_name"][content="WIRED"]')) {
		selectors = [
			'article.content p',
			'.article-body-component p'
		];
	} else if (page.head.querySelector('meta[property="og:site_name"][content="BBC News"]')) {
		selectors = [
			'.story-body__inner p'
		];
	} else {
		selectors = ['main'];
	}


	elements = page.body.querySelectorAll(selectors.join(', '));
	elementsArr = [];
	for(var i = 0; i < elements.length; ++i) {
		elementsArr.push(elements[i].textContent);
	}
	text = elementsArr.join(' ');
	return {
		pageTitle,
		text
	};
}


export { loadUrlContent };
