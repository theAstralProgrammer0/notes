#!/usr/bin/node

/* creates a Person constructor and gives it some methods */
function Person(name) {
    this.name = name;
    this.talk = () => {
        return `Hello, I am ${this.name}`;
    };
    this.run = () => {
        return `${this.talk()}, and I'm running...`;
    };
}

const me = new Person('Temi');
me.run();
me.talk();


/* creates */
function SuperElement(type, content) {
	this.elem = createElement(type);
	this.elem.innerText = content;
	document.body.append(this.elem);
	this.elem.addEventListener('click', () => {
		console.log(this.elem);
	})
}

const header = new SuperElement('h1', 'TEMI');

