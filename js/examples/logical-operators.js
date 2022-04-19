console.log('Logical Operators');


/*
// OR (||)
// ex 1
if( 1 || 0){
    console.log('success');
}

// ex 2
const a = 0;
const b = 1;
const result1 = a || b;
console.log(typeof a, typeof b, a, b, typeof result1, result1);

// ex 3
const result2 = a || false || "value" || b;
console.log(typeof a, typeof b, a, b, typeof result2, result2);

// ex 4
const result3 = false || "" || 0;
console.log(typeof result3, result3);
*/

/*
// AND (&&)

// ex 1
if( 1 && 0 ){
    console.log('not success');
} else {
    console.log('success');
}

// ex 2

const a = 0;
const b = 1;

const result1 = a && b;
console.log(typeof a, typeof b, a, b, typeof result1, result1);

// ex 3

const result2 = b && true && "value 123";
console.log(typeof a, typeof b, a, b, typeof result2, result2);
*/

// NOT (!)

/*
if(!1){
    //
    console.log('ok');
} else {
    console.log('not ok');
}
*/

// Practic

console.log('Ex1: null || 0 || "" || undeﬁned');
console.log('Ex1 res:', (null || 0 || "" || undefined));

console.log('Ex2: "яблоко" && true && null && 1');
console.log('Ex2 res:', ("яблоко" && true && null && 1));

console.log('Ex3: 0 || true && "false" || null');
console.log('Ex3 res:', ((0 || true) && ("false" || null)));

console.log('Ex4: 0 && true || "false" && null');
console.log('Ex4 res:', ((0 && true) || ("false" && null)));

console.log('Ex5: !0 && !!1');
console.log('Ex5 res:', (!0 && !!1));

console.log('Ex6: !(null || !"апельсин" && true)');
console.log('Ex6 res:', (!(null || !"апельсин" && true)));