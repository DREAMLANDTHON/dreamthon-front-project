import React from "react";

export default function NotFound() {
    return (
        <div>
            <div className='info'>
                <h1 >해당 페이지를 찾지 못했습니다.</h1>
                <p>
                    주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
                </p>
            </div>
            <img src='/coding_cat.gif'/>
        </div>
    );
}
