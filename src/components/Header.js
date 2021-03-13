import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> TO DO LIST </h1>
      <img src="https://c4.wallpaperflare.com/wallpaper/426/495/684/skull-pirates-wallpaper-preview.jpg" width = "100" heigth= "100"></img>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "black",
  textAlign: "center",
  padding: "10px"
};

export default Header;
