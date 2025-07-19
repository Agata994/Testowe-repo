function toggleMenuBtn() {
  let state = menu_btn.dataset.state;
  menu_btn.dataset.state = 
    (!state || state === "hamburger") ? "x" : "hamburger";
  
  // add other menu button toggle functionality here    
}

let menu_btn = document.getElementById("menu-btn"); 
menu_btn.onclick = toggleMenuBtn;
