var curry = require('lodash/curry');
var compose = require('lodash/fp/compose');
var Immutable = require('immutable');

// (a -> b) -> F a -> F b
const map = curry((morph, functor) => functor.map(morph));

// (a -> Boolean) -> F a -> F a
const filter = curry((predicate, functor) => functor.filter(predicate));

// (a -> b -> a) -> a -> F b -> a
const reduce = curry((reducer, acc, R) => R.reduce(reducer, acc));



/** ========== ÖVNING 1 ============
 * Använd funktionerna map och square för att skapa en funktion
 * som kan kvadrera innehållet i en funktor.
 *
 * Exempel:
 *
 * ex1([2, 3]) skall resultera i [4, 9]
 */

// Number -> Number
const square = num => num * num;

// Här ska du implentera din lösning.
const ex1 = undefined;



/** ========== ÖVNING 2 ============
 * Använd funktionerna filter och isEven för att filtera en
 * funktor så att bara alla jämna tal finns kvar.
 *
 * Exempel:
 *
 * ex2([2, 3]) skall resultera i [2]
 */

// Number -> Boolean
const isEven = num => num % 2 === 0;

// Här ska du implementera din lösning.
const ex2 = undefined;



/** ========== ÖVNING 3 ============
 * Använd funktionerna reduce och add för att summera alla siffror i en funktor.
 *
 * Exempel:
 *
 * ex3([2, 3]) skall resultera i 5
 */

// Number -> Number -> Number
const add = curry((a, b) => a + b);

// Här ska du implementera din lösning.
const ex3 = undefined;



/** ========== ÖVNING 4 ============
 * Använd compose, map, join, och bars för att göra en funktion
 * som ritar ett horisontellt stapeldiagram.
 *
 * Exempel:
 *
 * ex4([2, 3, 6]) skall resultera i:
 *
 * ==
 * ===
 * ======
 */

// Number -> String
const bars = a => a ? '=' + bars(--a) : '';

// String -> Joinable -> String
const join = curry((glue, as) => as.join(glue));

// Här ska du implementera din lösning.
const ex4 = undefined;



/** ========== ÖVNING 5 ============
 * Använd reduce, prop, getMostOptimisticVoter för att skapa en funktion
 * som reducerar en lista av röster till namnet på den person som innehar
 * den största rösten.
 *
 * Exempel:
 *
 * ex5(votes) skall resultera i "Conny"
 *
 */

// Obs: dessa används i testerna, så ändra icke!
const votes = [
    { name: 'Pelle', vote: 345 },
    { name: 'Kalle', vote: 213 },
    { name: 'Ronny', vote: 12 },
    { name: 'Conny', vote: 3030 },
    { name: 'Zlatan', vote: -123 },
];
const unit = { name: '', vote: -Infinity };

// String -> Object/Array -> a
const prop = curry((key, a) => a[key]);

// type Vote = { name: String, vote: Number }
// Voter -> Voter -> Voter
const getMostOptimisticVoter = (a, b) => a.vote > b.vote ? a : b;

// Här ska du implementera din lösning.
const ex5 = undefined;



/** ========== ÖVNING 6 ============
 * Relevanta buzzwords: Monoid, Isomorphic.
 *
 * Implementera reducer och initialValue för att ex6 ska reducera votes
 * till ett objekt där namnet är nyckeln och värdet är rösten.
 *
 * Exempel:
 *
 * ex6([{ name: "Maximiliam" : vote: 123 }]) skall resultera i { Maximiliam: 123 }.
 */

// Här ska du implementera din lösning.
const reducer = undefined;
const initialValue = undefined;

// Rör icke.
const ex6 = reduce(reducer, initialValue);



/** ========== ÖVNING 7 ============
 * Implementera en "pointfree" lösning som förvandlar:
 *
 * ["make", "programming", "great", "again"]
 *
 * till
 *
 * <h1>MAKE</h1>
 * <h1>PROGRAMMING</h1>
 * <h1>GREAT</h1>
 * <h1>AGAIN</h1>
 *
 * (notera radbrytningarna)
 */

// String -> String
const uppercase = s => s.toUpperCase();
// String -> String
const putInH1 = s => '<h1>'+s+'</h1>';

// Här ska du implementera din lösning.
const ex7 = undefined;


module.exports = {
    ex1: ex1,
    ex2: ex2,
    ex3: ex3,
    ex4: ex4,
    ex5: ex5,
    ex6: ex6,
    ex7: ex7,
    votes: votes,
};
