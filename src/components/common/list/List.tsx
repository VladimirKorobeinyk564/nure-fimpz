import classes from './List.module.scss'
import React from "react";

interface ListProps {
    type: string;
    children: React.ReactNode;
}

enum ListType {
    NUMBER = "Number",
    TEXT = "Text"
}

const List = ({type, children}: ListProps) => {
    return (
        type === ListType.NUMBER ? (
            <ol className={classes.number_list}>
                {children}
            </ol>
        ) : type === ListType.TEXT && (
            <ul className={classes.text_list}>
                {children}
            </ul>
        )
    );
};

export default List;