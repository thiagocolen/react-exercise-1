import { render, screen } from "./test-utils";
import App from "./App";

describe("App Component", () => {
  test("if BgImageComponent is on the screen", () => {
    render(<App />);

    const BgImageComponent = screen.getByTestId("bg-image-component");
    expect(BgImageComponent).toBeInTheDocument();
  });

  test("if HeaderComponent is on the screen", () => {
    render(<App />);

    const HeaderComponent = screen.getByTestId("header-component");
    expect(HeaderComponent).toBeInTheDocument();
  });

  test("if UserListComponent is loading", async () => {
    render(<App />);

    const UserListComponent = await screen.findByTestId(
      "user-list-component-loading"
    );
    expect(UserListComponent).toBeInTheDocument();
  });

  test("if UserListComponent was loaded", async () => {
    render(<App />, {
      preloadedState: {
        mainReducer: {
          showSelectedUserDetailsLoader: false,
          showUserActivitiesListLoader: false,
          usersList: [
            {
              id: "fakeData",
              image: "fakeData",
              name: "fakeData",
              balance: {
                points: "fakeData",
              },
            },
          ],
        },
      },
    });

    const UserListComponent = await screen.findByTestId(
      "user-list-component-loaded"
    );
    expect(UserListComponent).toBeInTheDocument();
  });

  test("if UserDetailsComponent was loaded", async () => {
    render(<App />, {
      preloadedState: {
        mainReducer: {
          showSelectedUserDetailsLoader: true,
          selectedUserDetails: {
            image: "fakeData",
            balance: {
              points: "fakeData",
              miles: "fakeData",
              formatedCurrency: "fakeData",
            },
          },
          selectedProgramLevelsList: [{ order: 1, name: "fakeData" }],
          selectedProgramLevel: { order: 1 },
          programLevelMarks: [
            { value: 0, label: "fakeData" },
            { value: 1, label: "fakeData" },
          ],
          showUserActivitiesListLoader: false,
          usersList: [
            {
              id: "fakeData",
              image: "fakeData",
              name: "fakeData",
              balance: {
                points: "fakeData",
              },
            },
          ], 
        },
      },
    });

    const UserListComponent = await screen.findByTestId(
      "user-details-component-loaded"
    );
    expect(UserListComponent).toBeInTheDocument();
  });
});
