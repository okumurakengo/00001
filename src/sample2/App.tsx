import * as React from "react";

type Props = {
    foo: string;
}

export default (props: Props) => (
    <h1>{props.foo}</h1>
);
