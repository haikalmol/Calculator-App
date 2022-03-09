const root = document.querySelector(":root");
const toggleBody = document.querySelector(".theme-toggle-body");
const togglePath = document.querySelector(".theme-toggle-path");
const toggleBtn = document.querySelector(".theme-toggle");

let themePosition = [
  { currentTheme: 1 },
  {
    name: "theme-1",
    props: {
      mainBackCol: "hsl(222, 26%, 31%)",
      toggleKeypadBack: "hsl(223, 31%, 20%)",
      screenBack: "hsl(224, 36%, 15%)",
      textLogoOutput: "rgb(255, 255, 255)",
      textPrimary: "hsl(221, 14%, 31%)",
      textSecondary: "hsl(0, 0%, 100%)",
      textTeritary: "hsl(0, 0%, 100%)",
      primaryKey: "hsl(30, 25%, 89%)",
      primaryKeyShadow: "hsl(28, 16%, 65%)",
      eqKey: "hsl(6, 63%, 50%)",
      eqKeyShadow: "hsl(6, 70%, 34%)",
      delResetKey: "hsl(225, 21%, 49%)",
      delResetKeyShadow: "hsl(224, 28%, 35%)",
    },
  },
  {
    name: "theme-2",
    props: {
      mainBackCol: "hsl(0, 0%, 90%)",
      toggleKeypadBack: "hsl(0, 5%, 81%)",
      screenBack: "hsl(0, 0%, 93%)",
      textLogoOutput: "hsl(60, 10%, 19%)",
      textPrimary: "hsl(60, 10%, 19%)",
      textSecondary: "hsl(0, 0%, 100%)",
      textTeritary: "hsl(0, 0%, 100%)",
      primaryKey: "hsl(45, 7%, 89%)",
      primaryKeyShadow: "hsl(35, 11%, 61%)",
      eqKey: "hsl(25, 98%, 40%)",
      eqKeyShadow: "hsl(25, 99%, 27%)",
      delResetKey: "hsl(185, 42%, 37%)",
      delResetKeyShadow: "hsl(185, 58%, 25%)",
    },
  },
  {
    name: "theme-3",
    props: {
      mainBackCol: "hsl(268, 75%, 9%)",
      toggleKeypadBack: "hsl(268, 71%, 12%)",
      screenBack: "hsl(268, 71%, 12%)",
      textLogoOutput: "hsl(52, 100%, 62%)",
      textPrimary: "hsl(52, 100%, 62%)",
      textSecondary: "hsl(0, 0%, 100%)",
      textTeritary: "hsl(198, 20%, 13%)",
      primaryKey: "hsl(268, 47%, 21%)",
      primaryKeyShadow: "hsl(290, 70%, 36%)",
      eqKey: "hsl(176, 100%, 44%)",
      eqKeyShadow: "hsl(177, 92%, 70%)",
      delResetKey: "hsl(281, 89%, 26%)",
      delResetKeyShadow: "hsl(285, 91%, 52%)",
    },
  },
];

let moveToggle = () => {
  if (themePosition[0].currentTheme >= 1 && themePosition[0].currentTheme < 3) {
    themePosition[0].currentTheme = themePosition[0].currentTheme + 1;
  } else {
    themePosition[0].currentTheme = 1;
  }
  toggleBtn.className = `theme-toggle ${themePosition[themePosition[0].currentTheme].name}`;
};

let changeTheme = () => {
  root.style.setProperty("--main-background", themePosition[themePosition[0].currentTheme].props.mainBackCol);
  root.style.setProperty("--toggle-keypad-background", themePosition[themePosition[0].currentTheme].props.toggleKeypadBack);
  root.style.setProperty("--screen-background", themePosition[themePosition[0].currentTheme].props.screenBack);

  root.style.setProperty("--text-logo-output", themePosition[themePosition[0].currentTheme].props.textLogoOutput);
  root.style.setProperty("--text-primary", themePosition[themePosition[0].currentTheme].props.textPrimary);
  root.style.setProperty("--text-secondary", themePosition[themePosition[0].currentTheme].props.textSecondary);
  root.style.setProperty("--text-teritary", themePosition[themePosition[0].currentTheme].props.textTeritary);

  root.style.setProperty("--primary-key", themePosition[themePosition[0].currentTheme].props.primaryKey);
  root.style.setProperty("--primary-key-shadow", themePosition[themePosition[0].currentTheme].props.primaryKeyShadow);
  root.style.setProperty("--eq-key", themePosition[themePosition[0].currentTheme].props.eqKey);
  root.style.setProperty("--eq-key-shadow", themePosition[themePosition[0].currentTheme].props.eqKeyShadow);
  root.style.setProperty("--del-reset-key", themePosition[themePosition[0].currentTheme].props.delResetKey);
  root.style.setProperty("--del-reset-key-shadow", themePosition[themePosition[0].currentTheme].props.delResetKeyShadow);
};

toggleBody.onclick = () => {
  moveToggle();
  changeTheme();
};
