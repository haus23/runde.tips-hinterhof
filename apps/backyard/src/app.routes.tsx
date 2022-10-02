import { auth } from 'lib';
import { redirect, RouteObject } from 'react-router-dom';

import AppShell from './app/app-shell';

import ChampionshipsView from './app/master-data/championships';
import PlayersView from './app/master-data/players';
import TeamsView from './app/master-data/teams';
import LeaguesView from './app/master-data/leagues';
import RulesView from './app/master-data/rules';

import ChampionshipView from './app/championship';
import ChampionshipPlayersView from './app/championship-players';
import ChampionshipCreateView from './app/championship/create';
import Dashboard from './app/dashboard';
import Login from './app/login';
import Logout from './app/logout';
import MatchesView from './app/matches';
import ProfileView from './app/profile';
import TipsView from './app/tips';

const appRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppShell />,
    loader: async () => {
      if (!auth.currentUser) {
        return redirect('/login?from=' + window.location.pathname);
      }
    },
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'stammdaten',
        children: [
          { path: 'turniere', element: <ChampionshipsView /> },
          { path: 'spieler', element: <PlayersView /> },
          { path: 'teams', element: <TeamsView /> },
          { path: 'ligen', element: <LeaguesView /> },
          { path: 'regelwerke', element: <RulesView /> },
        ],
      },
      { path: 'turnier', element: <ChampionshipView /> },
      { path: 'neues-turnier', element: <ChampionshipCreateView /> },
      { path: 'mitspieler', element: <ChampionshipPlayersView /> },
      { path: 'tipps', element: <TipsView /> },
      { path: 'spiele', element: <MatchesView /> },
      { path: 'profil', element: <ProfileView /> },

      { path: 'logout', element: <Logout /> },
    ],
  },
];

export default appRoutes;
