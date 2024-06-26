import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'

import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import Register from '@/pages/Register'
import Dashboard from '@/pages/Dashboard'
import Events from '@/pages/event/Events'
import EventDetail from './pages/event/EventDetail'
import NewEvent from '@/pages/event/NewEvent'
import CalendarView from '@/pages/event/CalendarView'
import Finances from '@/pages/finance/Finances'
import NewTransaction from '@/pages/finance/NewTransaction'

import ScrollToAnchor from '@/utils/ScrollToAnchor'
import ProtectedRoute from '@/utils/ProtectedRoute'
import Header from '@/components/Header'

function App() {
  return (
    <Router>
      <>
        <ScrollToAnchor />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Outlet />}>
              <Route path="events" element={<Events />} />
              <Route path="events/detail/:id" element={<EventDetail />} />
              <Route path="events/new" element={<NewEvent />} />
              <Route path="events/v/calendar" element={<CalendarView />} />
            </Route>

            <Route path="/" element={<Outlet />}>
              <Route path="finances" element={<Finances />} />
              <Route path="finances/new" element={<NewTransaction />} />
            </Route>
          </Route>
        </Routes>
      </>
    </Router>
  )
}

export default App
