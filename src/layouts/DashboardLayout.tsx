import React from 'react';
import DashboardSidebar from '../components/DashSidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 p-6 ml-auto transition-margin duration-300 ease-in-out">
        <main>
          <Outlet /> {/* Render child routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
