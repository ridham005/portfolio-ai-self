import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AdminContext = createContext(null);

const HASH_KEY = 'ridham_admin_hash';       // localStorage — persists password hash
const SESSION_KEY = 'ridham_admin_session'; // sessionStorage — clears on tab close

/* SHA-256 using Web Crypto API */
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() =>
    sessionStorage.getItem(SESSION_KEY) === 'true'
  );
  const [isPasswordSet, setIsPasswordSet] = useState(() =>
    Boolean(localStorage.getItem(HASH_KEY))
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');

  /* Ctrl+Shift+E shortcut to open admin modal */
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setModalOpen(true);
        setError('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* Login — hash entered password, compare to stored hash */
  const login = useCallback(async (password) => {
    const stored = localStorage.getItem(HASH_KEY);
    const hash = await sha256(password);
    if (hash === stored) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAdmin(true);
      setModalOpen(false);
      setError('');
      return true;
    }
    setError('Incorrect password. Try again.');
    return false;
  }, []);

  /* Setup — set password for the first time */
  const setupPassword = useCallback(async (password) => {
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return false; }
    const hash = await sha256(password);
    localStorage.setItem(HASH_KEY, hash);
    sessionStorage.setItem(SESSION_KEY, 'true');
    setIsPasswordSet(true);
    setIsAdmin(true);
    setModalOpen(false);
    setError('');
    return true;
  }, []);

  /* Change password (must be logged in) */
  const changePassword = useCallback(async (currentPassword, newPassword) => {
    const stored = localStorage.getItem(HASH_KEY);
    const currentHash = await sha256(currentPassword);
    if (currentHash !== stored) { setError('Current password is incorrect.'); return false; }
    if (newPassword.length < 6) { setError('New password must be at least 6 characters.'); return false; }
    const newHash = await sha256(newPassword);
    localStorage.setItem(HASH_KEY, newHash);
    setError('');
    return true;
  }, []);

  /* Logout */
  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAdmin(false);
  }, []);

  return (
    <AdminContext.Provider value={{
      isAdmin, isPasswordSet, modalOpen, setModalOpen, error, setError,
      login, setupPassword, changePassword, logout,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used inside <AdminProvider>');
  return ctx;
}
