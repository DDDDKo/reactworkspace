import React from 'react'

export function Sample() {
    return (
        <h1>Sample Component</h1>
    );
}

export default function Component() {
    // 함수형 컴포넌트의 return
    // - 해당 컴포넌트가 렌더링할 요소를 지정하는 곳(반환하는 곳)
    // - html 처럼 보이지만 html이 아님
    // - 여러가지 자바 스크립트 *연산자*를 사용할 수 있음
    // - 반드시 하나의 요소만 반환이 가능 (0개 x, 2개 이상 x)
    // - 하나의 컴포넌트가 다수의 요소를 반환하고자 하면 최상단에 해당 요소를 묶어주는 부모 요소를 포함해야함
    // - 부모 요소로 묶을때 <></>을 이용하여 의미없는 태그를 생성할 수 있음
    // - 반드시 return 키워드 바로 뒤에 반환 요소가 있어야 함
    return (
        <>
            <div>Component</div>
            <div>Component</div>
        </>
    );
}
