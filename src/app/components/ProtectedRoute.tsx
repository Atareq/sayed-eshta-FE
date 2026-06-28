import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is registered
    const isRegistered = localStorage.getItem('userRegistered');

    if (!isRegistered) {
      // Not registered - redirect to registration
      navigate('/registration');
      return;
    }

    // Check if quiz is completed
    const quizCompleted = localStorage.getItem('quizCompleted');

    if (!quizCompleted) {
      // Registered but quiz not completed - redirect to quiz
      navigate('/story-quiz');
      return;
    }
  }, [navigate]);

  return <>{children}</>;
}
