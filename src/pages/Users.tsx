import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import SearchBar from "../components/SearchBar"; // Импортируем компонент поиска

const users = [
  { id: 1, name: "Galen Slixby", role: "Editor", status: "Inactive" },
  { id: 2, name: "Halsey Redmore", role: "Author", status: "Pending" },
  { id: 3, name: "Marjory Sicely", role: "Maintainer", status: "Active" },
];

export default function Users() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Users</h1>

      {/* Строка поиска */}
      <SearchBar />

      {/* Таблица пользователей */}
      <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
