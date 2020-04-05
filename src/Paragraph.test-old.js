import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Paragraph from "./Paragraph";

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

describe('Paragraph', () => {
    it('should render "Text"', () => {
        act(() => { render(<Paragraph>Text</Paragraph>, container); });
        expect(container.textContent).toEqual('Text')
    });

    it('should render nothing', () => {
        act(() => { render(<Paragraph />, container); });
        expect(container.textContent).toEqual('')
    });
});