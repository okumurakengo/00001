import * as React from "react";
import { render } from "react-dom";

import App01 from "./sample1/App";
import App02 from "./sample2/App";
import App03 from "./sample3/App";

render(
    <div>
        <App01 foo="bar" />
        <App02 foo="hoge" />
        <App03 foo="piyo" />
    </div>,
    document.body.appendChild(document.createElement('div')) as HTMLDivElement
);
