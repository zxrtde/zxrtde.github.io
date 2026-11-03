import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";

jest.mock("react-scrollspy", () => ({ children }) => <>{children}</>);

test("displays the IAS email as readable obfuscated text without a mail link", () => {
  const { container } = render(<Nav mobileNav={false} setMobileNav={jest.fn()} />);
  const email = screen.getByText("efronyuv [at] ias [dot] edu");
  expect(email.closest("address")).toHaveClass("contact-email");
  expect(email.closest("a")).toBeNull();
  expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  expect(container.innerHTML).not.toMatch(/efronyuv@ias\.(com|edu)/);
  expect(container.querySelector(".bx-envelope")).toHaveAttribute("aria-hidden", "true");
});

test("preserves the existing section links and mobile menu behavior", () => {
  const setMobileNav = jest.fn();
  render(<Nav mobileNav={true} setMobileNav={setMobileNav} />);
  for (const [name, href] of [["About", "#about"], ["Publications", "#publications"], ["Talks", "#talks"]]) {
    expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
  }
  fireEvent.click(screen.getByRole("link", { name: "About" }));
  expect(setMobileNav).toHaveBeenCalledWith(false);
});
