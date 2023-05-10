import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary_body: string;
      title_body: string;
    };
    fonts: {
      primary: string;
    };
  }
}
