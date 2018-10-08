import { createStore } from 'redux';

const defaultState = {
	messages: [{
		date: new Date('2016-10-10 10:11:55'),
		postedBy: `Stan`,
		content: `I <3 the new productivity app!`
	}, {
		date: new Date('2016-10-10 10:12:00'),
		postedBy: `Jerry`,
		content: `I don't know if the new version of Boostrap is really better...`
	}, {
		date: new Date('2016-10-10 12:06:04'),
		postedBy: `Llewlyn`,
		content: `Anyone got tickets to ng-conf?`
	}],
	userStatus: `ONLINE`
};

const store = createStore((state = defaultState) => {
	return state;
});

const render = () => {
	const { messages, userStatus } = store.getState();
	document.getElementById("messages").innerHTML = messages
		.sort((a, b) => b.date - a.date)
		.map(message => (`
			<div>
				${message.postedBy} : ${message.content}
			</div>
		`))
		.join("");
};

render();