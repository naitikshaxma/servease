
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ProvidersList from './pages/ProvidersList';
import ProviderDetails from './pages/ProviderDetails';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import ProviderDashboard from './pages/ProviderDashboard';
import ProviderRequests from './pages/ProviderRequests';
import ProviderProfile from './pages/ProviderProfile';
import MyServices from './pages/MyServices';
import AddEditService from './pages/AddEditService';
import ProviderEarnings from './pages/ProviderEarnings';
import Booking from './pages/Booking';
import UserDashboard from './pages/UserDashboard';
import ProviderLayout from './components/ProviderLayout';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check session logic as requested
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('currentUser');
    if (isLoggedIn && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuth = (u: User) => {
    setUser(u);
    // Logic: Session is already set in Auth.tsx
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '#/login'; // Redirect to login as requested
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#020617] text-slate-50">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/providers/:serviceId" element={<ProvidersList />} />
            <Route path="/provider-detail/:providerId" element={<ProviderDetails />} />
            <Route path="/login" element={<Auth type="login" onAuth={handleAuth} />} />
            <Route path="/signup" element={<Auth type="signup" onAuth={handleAuth} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* User Protected Routes */}
            <Route path="/booking/:providerId" element={<ProtectedRoute user={user} role="customer"><Booking /></ProtectedRoute>} />
            <Route path="/customer/dashboard" element={<ProtectedRoute user={user} role="customer"><UserDashboard user={user} /></ProtectedRoute>} />

            {/* Provider Protected Routes */}
            <Route path="/provider" element={<ProtectedRoute user={user} role="provider"><ProviderLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<ProviderDashboard user={user} />} />
              <Route path="my-services" element={<MyServices />} />
              <Route path="add-service" element={<AddEditService />} />
              <Route path="edit-service/:serviceId" element={<AddEditService />} />
              <Route path="requests" element={<ProviderRequests />} />
              <Route path="earnings" element={<ProviderEarnings />} />
              <Route path="profile" element={<ProviderProfile />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
};

// Fix: Explicitly define ProtectedRouteProps and use React.FC to ensure proper children and user prop recognition
interface ProtectedRouteProps {
  user: User | null;
  role: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, role, children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn || !user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/" />;
  return <>{children}</>;
};

const FooterWrapper = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith('/provider') || pathname.startsWith('/customer/dashboard')) return null;
  return <Footer />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
