import { test, expect } from "vitest";
import { User } from "./user";

test("User.validateEmail", () => {
    expect(User.validateEmail(" ")).toBe(false);
    expect(User.validateEmail("email")).toBe(false);
    expect(User.validateEmail("email@")).toBe(false);
    expect(User.validateEmail("email@domain")).toBe(false);
    expect(User.validateEmail("email@domain.")).toBe(false);
    expect(User.validateEmail("email@teste.com")).toBe(true); 
});