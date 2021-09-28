import React from "react";

const inlineStyleExample = {
    fontSize: '72px',
    color: 'blue'
}

function InlineStyleComponent() {
    return (
        <div>
            <h2 style = { inlineStyleExample }> Inline CSS Styling </h2>
        </div>
    )
}

export default InlineStyleComponent

/*
    1) In order to apply Inline CSS, we need to declare in the file itself, like we had declared in line
       no 3,
        We had to follow 'camelCase' for inlineStyling at line no 4, else if it's not camelcase, it will
      not effect the applied div or body

    2) To apply the inline style in a div or particular tag, 
        we have to use the 'style' attribute on the paricular tag, as we had done in line no.11
*/ 