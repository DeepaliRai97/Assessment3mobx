import React from 'react';

export default class MovieSchema extends React.Component {

    constructor(props) {
      super(props);
      realm = new Realm({
        path: 'MovieSchema.realm',
        schema: [
          {
            name: 'Movies',
            properties: {
              movie_id: { type: 'int', default: 0 },
              moviename: 'string',
              generic: 'string',
              url: 'string',
            },
          },
        ],
      })
    }
}