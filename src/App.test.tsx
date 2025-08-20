// App.test.tsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

jest.mock(
  "./components/layout",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div data-testid="app-layout">{children}</div>
);

jest.mock("./components/pages/home", () => () => (
  <div data-testid="home-page">Home Page</div>
));

jest.mock("./components/pages/resources", () => () => (
  <div data-testid="resources-page">Resources Page</div>
));

jest.mock("./components/pages/toolkit", () => () => (
  <div data-testid="toolkit-page">Toolkit Page</div>
));

describe("App Component", () => {
  const renderWithRouter = (route: string) => {
    window.history.pushState({}, "Test page", route);
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  it("renders the AppLayout component", () => {
    renderWithRouter("/");
    expect(screen.getByTestId("app-layout")).toBeInTheDocument();
  });

  it("renders HomePage component for the root route", () => {
    renderWithRouter("/");
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("renders Resources component for the /resources route", () => {
    renderWithRouter("/resources");
    expect(screen.getByTestId("resources-page")).toBeInTheDocument();
  });

  it("renders Toolkit component for the /toolkit route", () => {
    renderWithRouter("/toolkit");
    expect(screen.getByTestId("toolkit-page")).toBeInTheDocument();
  });
});
