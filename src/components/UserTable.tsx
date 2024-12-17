
import { Avatar, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const users = [
  { id: 1, name: 'Galen Slixby', role: 'Editor', plan: 'Enterprise', billing: 'Auto Debit', status: 'Inactive' },
  { id: 2, name: 'Halsey Redmore', role: 'Author', plan: 'Team', billing: 'Auto Debit', status: 'Pending' },
  { id: 3, name: 'Marjory Sicely', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
];

const UserTable = () => {
  const renderStatus = (status: string) => {
    const color =
      status === 'Active' ? 'bg-green-600' : status === 'Pending' ? 'bg-yellow-600' : 'bg-gray-600';
    return <span className={`px-2 py-1 text-sm rounded ${color}`}>{status}</span>;
  };

  return (
    <table className="table-auto w-full bg-gray-800 text-white rounded-lg overflow-hidden">
      <thead className="bg-gray-700">
        <tr>
          <th className="p-2 text-left">USER</th>
          <th className="p-2 text-left">ROLE</th>
          <th className="p-2 text-left">PLAN</th>
          <th className="p-2 text-left">BILLING</th>
          <th className="p-2 text-left">STATUS</th>
          <th className="p-2 text-center">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b border-gray-700">
            <td className="p-2 flex items-center space-x-2">
              <Avatar>{user.name.charAt(0)}</Avatar>
              <div>
                <div>{user.name}</div>
                <div className="text-gray-400 text-sm lowercase">{`${user.name.split(' ')[0].toLowerCase()}${user.id}`}</div>
              </div>
            </td>
            <td className="p-2">{user.role}</td>
            <td className="p-2">{user.plan}</td>
            <td className="p-2">{user.billing}</td>
            <td className="p-2">{renderStatus(user.status)}</td>
            <td className="p-2 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Tooltip title="Delete">
                  <IconButton color="error" size="small">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View">
                  <IconButton color="primary" size="small">
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More">
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
