// theme/themeConfig.ts
import { theme, type ThemeConfig } from "antd";

const myTheme: ThemeConfig = {
  cssVar: true,
  // 1. Use dark algorithm
  // algorithm: theme.darkAlgorithm,
  // 2. Combine dark algorithm and compact algorithm
  // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
  // token: {
  //   fontSize: 16,
  //   colorPrimary: "#52c41a",
  // },
};

export default myTheme;
