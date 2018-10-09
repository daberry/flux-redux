import { generate as id } from 'shortid';

const asyncWaitTime = 500;

export const get = (url, cb) => {
	setTimeout(() => {
		cb(id());
	}, asyncWaitTime)
};