import * as React from "react";

interface IProps {
    foo: string;
}

export default (props: IProps) => (
    <h1>{props.foo}</h1>
);
