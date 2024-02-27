export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'eventName',
        type: 'string',
        title: 'Event Name'
      },
      {
        name: 'eventDescription',
        type: 'text',
        title: 'Event Description'
      },
      {
        name: 'eventImage',
        type: 'image',
        title: 'Event Image',
        options: {
          hotspot: true 
        }
      }
    ]
  }
  