const findEventsUserOwns = (events, userid) => events.filter(event => event.owner.id === userid);
// The time complexity here is O(2n)
const findEventsUserAttends = (events, userid) => {
  const result = [];
  events.forEach((event) => {
    event.attendees.forEach((attendee) => {
      if (attendee.id === userid) {
        result.push(event);
      }
    });
  });
  return result;
};


module.exports = {
  findEventsUserOwns,
  findEventsUserAttends,
};
