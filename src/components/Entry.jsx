import React from 'react';
const Entry = (props) => {
    return (
        <div className="dictionary">
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                        {props.emojiP}
            </span>
                    <span>{props.nameP}</span>
                </dt>
                <dd>
                    {props.meaningP}
        </dd>
            </div>
        </div>
    );
};

export default Entry;