const str = 'hello javascript';

const reverseString = () => str.split('').reverse().join('');

const toggleCase = () => str.toUpperCase();

const isPallindrome = () => str.split('').reverse().join('') === str;

const vowels = () => {
	const allVowels = str.match(/[a|e|i|o|u]/gi);
	const noDuplicates = new Set(allVowels);
	return [ ...noDuplicates ];
};

// listen silent
const isAnagram = (s1, s2) => {
	if (s1.length !== s2.length) {
		return false;
	}
	const sortedStr1 = s1.toLowerCase().split('').sort().join('');
	const sortedStr2 = s2.toLowerCase().split('').sort().join('');
	return sortedStr1 === sortedStr2;
};

console.log(reverseString());
console.log(toggleCase());
console.log(isPallindrome());
console.log(vowels());
console.log(isAnagram('onmgo', 'mongo'));
