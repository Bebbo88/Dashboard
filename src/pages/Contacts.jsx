import * as React from "react";
import clsx from "clsx";
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import { TailwindDemoContainer } from "@mui/x-data-grid/internals";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Typography } from "@mui/material";
import Header from "../components/Header";

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "flex h-9 items-center justify-center rounded border border-neutral-200 cursor-pointer dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-2.5 text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap select-none hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 active:bg-neutral-100 dark:active:bg-neutral-700",
        props.className
      )}
    />
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={clsx(
        "h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600",
        props.className
      )}
    />
  );
}

function CustomToolbar() {
  return (
    <Toolbar className="gap-2! p-2!">
      <ColumnsPanelTrigger
        render={<ToolbarButton render={<Button>Columns</Button>} />}
      />
      <FilterPanelTrigger
        render={<ToolbarButton render={<Button>Filter</Button>} />}
      />
      <ExportCsv render={<ToolbarButton render={<Button>Export</Button>} />} />
      <ExportPrint render={<ToolbarButton render={<Button>Print</Button>} />} />
      <QuickFilter
        render={(props, state) => (
          <div {...props} className="ml-auto flex overflow-clip">
            <QuickFilterTrigger
              className={state.expanded ? "rounded-r-none border-r-0" : ""}
              render={
                <ToolbarButton
                  render={
                    <Button aria-label="Search">
                      <SearchIcon fontSize="small" />
                    </Button>
                  }
                />
              }
            />
            <div
              className={clsx(
                "flex overflow-clip transition-all duration-300 ease-in-out",
                state.expanded ? "w-48" : "w-0"
              )}
            >
              <QuickFilterControl
                aria-label="Search"
                placeholder="Search"
                render={({ slotProps, ...controlProps }) => (
                  <TextInput
                    {...controlProps}
                    {...slotProps?.htmlInput}
                    className={clsx(
                      "flex-1 rounded-l-none",
                      state.expanded && state.value !== "" && "rounded-r-none"
                    )}
                  />
                )}
              />
              {state.expanded && state.value !== "" && (
                <QuickFilterClear
                  render={
                    <Button aria-label="Clear" className="rounded-l-none">
                      <CancelIcon fontSize="small" />
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        )}
      />
    </Toolbar>
  );
}

export default function GridToolbarCustom({ window }) {
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

  // This is used only for the example, you can remove it.
  const documentBody =
    window !== undefined ? window().document.body : undefined;
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Header
        title={"CONTACTS"}
        subTitle={"List Of Contacts For Future Reference "}
      />

      <TailwindDemoContainer documentBody={documentBody}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          showToolbar
        />
      </TailwindDemoContainer>
    </Box>
  );
}
