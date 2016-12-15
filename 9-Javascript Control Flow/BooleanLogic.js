Boolean Logic
Everything starts with the idea that a statement is either True or False

Then we can combine those initial statements to create more complex statements that also evaluate to True or False

Comparison Operators
Operator	Name	Example	​Result
>	Greater than	x > 10	false
>=	Greater than or equal to	x >= 5	true
<	Less than	x < -50	false
<=	Less than or equal to	x <= 100	true
==	Equal to	x == "5"	true
!=	Not equal to	x != "b"	true
===	Equal value and type	x === "5"	false
!==	Not equal value or equal type	x !== "5"	true

Equality Operators
== vs. ===
var x = 99;

x == "99"  //true

x === "99" //false


var y = null;

y == undefined //true

y === undefined //false
"==" performs type coercion, while "===" does not

Truthy and Falsy Values
Falsy Values:

false
0
""
null
undefined
NaN
Everything Else Is Truthy
