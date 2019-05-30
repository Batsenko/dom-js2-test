'use strict';

// trim wont work
function cleanStr(str) {
    while (str.indexOf("\t") > -1) {
        str = str.replace("\t", " ");
    }
    while (str.indexOf("  ") > -1) {
        str = str.replace("  ", " ");
    }
    return str;
}

document.addEventListener('DOMContentLoaded', () => {	
	
	let xml = new XMLHttpRequest();
	xml.open("GET", "http://my-json-server.typicode.com/mate-academy/literary-blog/articles", false);
	xml.send();
	let data = JSON.parse(xml.responseText);
	
	const articleList = new ArticleList(document.querySelector("#article-list"));	
	for(let i = 0; i < data.length; i++) {
		articleList.addArticle(new Article(data[i].title, data[i].author, data[i].text));
	}
	
	articleList.render();

	const input = document.querySelector("input");
	input.addEventListener("input", () => {
		articleList.render(cleanStr(input.value));
	});
});