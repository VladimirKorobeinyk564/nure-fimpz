import classes from './List.module.scss'
import React from "react";

interface ListProps {
    type: string;
    children: React.ReactNode;
    className?: string;
}

enum ListType {
    NUMBER = "Number",
    TEXT = "Text"
}

const List = ({type, children, className}: ListProps) => {
    return (
        type === ListType.NUMBER ? (
            <ol className={`${classes.number_list} ${className}`}>
                {children}
            </ol>
        ) : type === ListType.TEXT && (
            <ul className={`${classes.text_list} ${className}`}>
                {children}
            </ul>
        )
    );
};

export default List;