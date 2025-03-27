import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        
        <div className="space-y-4">
          <p>Welcome, {user?.email} (Role: {user?.role})</p>
          <div className="p-4 bg-blue-50 rounded border border-blue-200">
            <h2 className="font-semibold text-blue-800">Admin Privileges</h2>
            <p className="mt-2">You have access to all administrative functions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;