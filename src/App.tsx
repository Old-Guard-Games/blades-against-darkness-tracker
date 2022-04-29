import React, { useCallback, useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import compare from 'compare-versions';

import packageInfo from '../package.json';

import './App.scss';
import { Nav } from './app/nav';

import { FactionList } from './features/factions/FactionList';
import { EditZone } from './features/zones/EditZone';
import { ZoneList } from './features/zones/ZoneList';
import { EditFaction } from './features/factions/EditFaction';

function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  const [loadingStatus, setLoadingStatus] = useState({
    loading: true,
    isLatestVersion: false
  });

  const clearCacheAndReload = async () => {
    try {
      if (window?.caches) {
        for (const key of await window.caches.keys()) {
          console.log('removing key - ',key);
          await caches.delete(key);
        }
        console.log('Cache cleared');
        window.location.reload();
      }
    } catch (error) {
      console.error('Something went wrong while deleting cache',error)
    }
  }

  const checkStatus = useCallback( async () => {
    try {
      const basePath = isProduction ? packageInfo.homepage : (packageInfo as any).localHomepage;
      const path = `${basePath}meta.json?${new Date().getTime()}`;
      const resp = await fetch(path, {cache: 'no-cache'});
      const {version: metaVersion} = await resp.json();
      const diff = compare(packageInfo.version, metaVersion);
      const shouldRefresh = diff < 0;

      if (shouldRefresh) {
        console.log(`There is a new version - ${metaVersion}. We should refresh.`);
        setLoadingStatus({
          loading: false,
          isLatestVersion: false
        });
      } else {
        console.log(`Using the latest version, code ${diff}`);
        setLoadingStatus({
          loading: false,
          isLatestVersion: true
        });
      }

    } catch (error) {
      console.error('An error occurred while checking cache',error);
      setLoadingStatus({
        loading: false,
        isLatestVersion: true
      });
    }
  },[isProduction]);

  useEffect(() => {
    checkStatus();
  },[checkStatus]);

  if (loadingStatus.loading) {
    return (<></>);
  }

  if (loadingStatus.isLatestVersion === false) {
    clearCacheAndReload();
  }

  return (
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={ <FactionList /> }
              />
            <Route
              path="/factions"
              element={ <FactionList /> }
              />
            <Route
              path="/factions/edit"
              element={ <EditFaction /> }
              />
            <Route
              path="/zones"
              element={ <ZoneList /> }
              />
            <Route
              path="/zones/edit"
              element={ <EditZone /> }
              />
            <Route
              path="*"
              element={
                <Navigate to="/" replace />
              }
              />
            
          </Routes>
        </Router>
      </div>
  );
}

export default App;
