function tabAction(tab){
  switch (tab){
    case "tab-1":
      showTab("tab1");
      hideTab("tab2");
      hideTab("tab3");
      break;
    case "tab-2":
      hideTab("tab1");
      showTab("tab2");
      hideTab("tab3");
      break;
    case "tab-3":
      hideTab("tab1");
      hideTab("tab2");
      showTab("tab3");
      break;
    default:
      return false;
  }
}


function showTab(tab){
  let tabNode = document.getElementById(tab);
  tabNode.classList.remove("hide");
  tabNode.classList.add("show");
}
function hideTab(tab){
  let tabNode = document.getElementById(tab);
  tabNode.classList.remove("show");
  tabNode.classList.add("hide");
}
