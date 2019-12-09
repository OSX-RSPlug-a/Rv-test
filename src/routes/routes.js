import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainpage';
import Quest2 from '../pages/quest2/Quest2';
import Quest3 from '../pages/quest3/Quest3';
import Quiz from '../pages/quiz/Quiz';
import Results from '../pages/results';
import SendPick from '../pages/choosensend';
import ConfSent from '../pages/confirmsend';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={MainPage}/>  
        <Route path="/quiz" component={Quiz} />
        <Route path="/quest2" component={Quest2} />
        <Route path="/quest3" component={Quest3} />
        <Route path="/results" component={Results} />
        <Route path="/choosensend" component={SendPick} />
        <Route path="/confirmsend" component={ConfSent} />
      </Switch>
  );
}