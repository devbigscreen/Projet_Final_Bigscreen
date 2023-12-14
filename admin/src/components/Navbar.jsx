import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";

import "../css/Navbar.css";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    console.log("deco");
  };

  const options = [
    <Link className="navLink" to={"/home"}>
      <HomeOutlinedIcon fontSize="large" />
      Home
    </Link>,
    <Link className="navLink" to={"/questions"}>
      <QuizOutlinedIcon fontSize="large" />
      Questions
    </Link>,
    <Link className="navLink" to={"/admin/all/answers"}>
      <ViewListOutlinedIcon fontSize="large" />
      Answers
    </Link>,
    <Link className="navLink" onClick={logout}>
      <LogoutIcon fontSize="large" className="logout" />
      Logout
    </Link>,
  ];

  return (
    <Box sx={{ flexGrow: 1 }} className="nav">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-owns={open ? "long-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClickListItem}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <div>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </AppBar>
    </Box>
  );
}
