// let age = 25;

// console.log(age === 25);
// console.log(age === '25');
// console.log(age == '25');

let score = 60;

// if(score === 100) {
//     console.log('축하합니다 A 입니다');
// } else if(score === 80) {
//     console.log('아쉽네요 B 입니다');
// } else {
//     console.log('분발하세요');
// }

// Server에서 데이터 값을 분류
// 쇼핑몰이라고 가정,,
// 0. 바지, 1. 티셔츠, 2. 치마, 3. 청바지
// Number가 String보다 용량이 작다. ==> indexing
// 검색이 용의하다.
// 속도도 빠르게 올릴 수 있다.

// 반팔 전체를 나는 보고싶어 ==> 상품명(반팔) || 반팔 ==> 오타 or 분류가 잘못될 수 있다.
// category number = 1;
// category number = 2;

let category = 1;

function Category(category) {
    switch(category) {
        case 0:
            console.log('바지 전체입니다.');
            break;
        case 1:
            console.log('S/M/L');
            break;
        case 2:
            console.log('M/L/XL');
            break;
    }
}

console.log(Category(category));