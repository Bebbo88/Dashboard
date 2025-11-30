import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Typography } from "@mui/material";
import Header from "../components/Header";

const columns = [
  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
    width: 33,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",

    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    headerAlign: "center",

    renderCell: ({ row }) => {
      const access = row.access;

      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "4px",
            width: "40%",
            mx: "auto",
            px: 1.5,
            py: 0.7,
            justifyContent: "space-evenly",
            bgcolor:
              access === "Admin"
                ? "#3da58a"
                : access === "Manager"
                ? "#b33ead"
                : "#3b7ddd",
          }}
        >
          {/* ICONS */}
          {access === "Admin" && (
            <AdminPanelSettingsOutlinedIcon
              sx={{ color: "#fff" }}
              fontSize="small"
            />
          )}

          {access === "Manager" && (
            <SecurityOutlinedIcon sx={{ color: "#fff" }} fontSize="small" />
          )}

          {access === "User" && (
            <LockOpenOutlinedIcon sx={{ color: "#fff" }} fontSize="small" />
          )}

          {/* TEXT */}
          <Typography sx={{ fontSize: "13px", color: "#fff" }}>
            {access}
          </Typography>
        </Box>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "Admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerselannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "Admin",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "Admin",
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "aryastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "Manager",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "Manager",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "User",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "User",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "User",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "User",
  },
];

export default function Team() {
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Header title={"INVOICES"} subTitle={"List Of Invoice Balances "} />

      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        pagination={false}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
