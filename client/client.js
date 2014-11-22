Template.eventList.helpers({
	events: function () {
		return Events.find();
	}
});

function generateEvents() {
	function makeNewEvent() {
		data = {
			point_id: Math.floor(Math.random() * 10),
			coords: {
				'lat': Math.random() * 1000,
				'lon': Math.random() * 1000
			},
			type: 'metro',
		};
		timestamp = new Date();
		card_id = Math.floor(Math.random() * 100000);
		var eventType = 'checkin';
		if (Math.floor(Math.random() * 100) < 50) {
			eventType = 'checkout';
		}
		data[eventType] = [timestamp, card_id];
		Events.insert(data);
		window.setInterval(makeNewEvent, 1000);
	}
	makeNewEvent();
}

Template.generatorScript.rendered = generateEvents;