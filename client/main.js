import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

Meteor.startup(() => {
    render(<h1>Hola amiguito</h1>, document.getElementById('render-target'));
  });