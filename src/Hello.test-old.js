// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Hello.js', () => {
    it("renders without a name", () => {
        act(() => { render(<Hello />, container); });
        expect(container.textContent).toBe("Hey, stranger");
    });

    it("renders with Jenny", () => {
        act(() => {
            render(<Hello name="Jenny" />, container);
        });
        expect(container.textContent).toBe("Hello, Jenny!");
    });

    it("renders with Margaret", () => {
        act(() => {
            render(<Hello name="Margaret" />, container);
        });
        expect(container.textContent).toBe("Hello, Margaret!");
    });
});