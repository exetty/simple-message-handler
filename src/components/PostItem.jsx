import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="posr__content">
                <strong>1. Javascript</strong>
                <div>
                    Javascript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;