'use strict';
class Article {
	constructor(title, author, text) {
		this.title = title;
		this.author = author;
		this.text = text;
	}
	
	matches(query) {
		if(this.title.indexOf(query) >= 0 || this.author.indexOf(query) >= 0 || this.text.indexOf(query) >= 0) return true;
		return false;
	}
}
