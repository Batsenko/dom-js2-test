'use strict';

document.addEventListener('DOMContentLoaded', () => {
	let xml = new XMLHttpRequest();
	xml.open("GET", "http://my-json-server.typicode.com/mate-academy/literary-blog/articles", false);
	xml.send();
	
	const articleList = new ArticleList(document.querySelector("#article-list"));
	let data = JSON.parse(xml.responseText);
	for(let i = 0; i < data.length; i++) {
		articleList.addArticle(new Article(data[i].title, data[i].author, data[i].text));
	}
	
	articleList.render();
	
});