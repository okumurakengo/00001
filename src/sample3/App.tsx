import * as React from "react";

interface IProps {
    foo: string;
}

export default (
    props => (
        <h1>{props.foo}</h1>
    )
) as React.SFC<IProps>;
