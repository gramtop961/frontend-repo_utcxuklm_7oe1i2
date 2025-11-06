import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import NewContactModal from './components/NewContactModal.jsx';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('home');
  const [dark, setDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} active={active} setActive={setActive} />
        <main className="flex-1">
          <Topbar dark={dark} setDark={setDark} />
          <div className="px-4 py-6 lg:px-8">
            <Dashboard onNewContact={() => setModalOpen(true)} />
          </div>
        </main>
      </div>

      <NewContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
