import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import App from "../App/App";

describe("Given a TodoList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an unordered list of todos", () => {
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      );

      const unorderedListTodos = screen.getByLabelText("list of todos");

      expect(unorderedListTodos).toBeInTheDocument();
    });
  });
});
