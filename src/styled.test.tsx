import React, { FC, useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { styled } from "./styled";
import { demoRecipe, variants } from "./example.css";

describe("styled tests", () => {
  it("renders with a no variant option", () => {
    const Component = styled("h1", demoRecipe, variants)();
    render(<Component>Groovy</Component>);
    expect(screen.getByRole("heading")).toHaveTextContent("Groovy");
    expect(screen.getByRole("heading")).not.toHaveStyle(`background: red`);
  });
  it("renders with a one variant option", () => {
    const Component = styled("h1", demoRecipe, variants)();
    render(<Component color="red">Groovy</Component>);
    expect(screen.getByRole("heading")).toHaveStyle(`background: red`);
  });
  it("renders with multiple variant options", () => {
    const Component = styled("h1", demoRecipe, variants)();
    render(
      <Component color="red" variant="title">
        Groovy
      </Component>
    );
    expect(screen.getByRole("heading")).toHaveStyle(`background: red`);
    expect(screen.getByRole("heading")).toHaveStyle(`fontSize: 100px`);
  });
  it("handles polymorphic as prop", () => {
    const Text = styled("div", demoRecipe, variants)();
    render(
      <Text color="red" variant="title" as={"h1"}>
        Groovy
      </Text>
    );
    expect(screen.getByRole("heading")).toHaveStyle(`background: red`);
    expect(screen.getByRole("heading")).toHaveStyle(`fontSize: 100px`);
  });
  it("renders with a react component as the option and preserves functionality", async () => {
    const BaseComponent: FC<{ className: string }> = ({ className }) => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1 className={className}>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };

    const Component = styled(BaseComponent, demoRecipe, variants)();
    render(<Component color="red" variant="title" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Count: 0");
    fireEvent.click(screen.getByText(/Increment/i));

    await expect(screen.getByRole("heading")).toHaveTextContent("Count: 1");
    expect(screen.getByRole("heading")).toHaveStyle(`background: red`);
    expect(screen.getByRole("heading")).toHaveStyle(`fontSize: 100px`);
  });
});
