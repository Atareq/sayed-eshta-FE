import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Registration } from './pages/Registration';
import { StoryQuiz } from './pages/StoryQuiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/registration" replace />,
  },
  {
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/story-quiz',
    Component: StoryQuiz,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: Home },
      { path: 'story', Component: Story },
      { path: 'products', Component: Products },
      { path: 'contact', Component: Contact },
    ],
  },
]);
