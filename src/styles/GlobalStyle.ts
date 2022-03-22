import { createGlobalStyle, css } from "styled-components";
import { ResetCss } from "./ResetCss";

export const GlobalStyle = createGlobalStyle`
${ResetCss};

 *,
  body {
    font-family: "Oswald", sans-serif;
    box-sizing: border-box;
  }

  body {
    color:#fafafa;
  }
`;
