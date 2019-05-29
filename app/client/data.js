import messages from './__mocks__/messages.json';
import members from './__mocks__/members.json';

export function randomDelayPromise(data) {
  const delay = Math.floor(Math.random() * 400) + 100;
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

export function getMessages() {
  return randomDelayPromise(messages);
}

export function getMembers() {
  return randomDelayPromise(members);
}
