const subscribers = {};

function subscribe(type, callback) {
  if (subscribers[type] == undefined) {
    subscribers[type] = [];
  }
  subscribers[type].push(callback);
}

function publush(type, data) {
  const currentSubscribers = subscribers[type];

  if (currentSubscribers) {
    for (let subscriber of currentSubscribers) {
      subscriber(data);
    }
  }
}

module.exports = {
    subscribe,
    publush
}
