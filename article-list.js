'use strict';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild; 
}


class ArticleList {
	
	constructor(container) {
		this.container = container;
		this.articleList = [];
	}
	
	addArticle(article) {
		this.articleList.push(article);
	}
	
	removeArticle(article) {
		this.articleList = this.articleList.slice(-1, 1);
	}
	
	render() {
		var child = this.container.lastElementChild;  
        while (child) { 
            this.container.removeChild(child); 
            child = this.container.lastElementChild; 
        } 
		
		for(let i = 0; i < this.articleList.length; i++) {
			const article = this.articleList[i];
			
			let div = document.createElement("div");
			let title = document.createElement("h1");
			title.innerText = article.title;
			let name = document.createElement("h3");
			name.innerText = article.author;
			let text = createElementFromHTML(article.text);
			let removeButton = document.createElement("a");
			removeButton.href = "#";
			removeButton.innerText = "☓";
			removeButton.addEventListener("click", () => {
				this.container.removeChild(div);
			});
			
			div.appendChild(title);
			div.appendChild(name);
			div.appendChild(text);
			div.appendChild(removeButton);
			
			this.container.appendChild(div);
		}
	}
}
