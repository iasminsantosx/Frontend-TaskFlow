import { a as EMPTY } from "./take-Csx5LS_X.js";
import { a as from, c as popNumber, s as innerFrom, u as popScheduler } from "./switchMap-BgCnbvo2.js";
import { i as mergeAll } from "./takeUntil-HuteCha0.js";
// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = popScheduler(args);
	var concurrent = popNumber(args, Infinity);
	var sources = args;
	return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
	if (modifiers.length) return modifiers.some((modifier) => event[modifier]);
	return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
export { merge as n, hasModifierKey as t };
