/**
 * Special fix for explicit resource management in FireFox/Safari
 */
if (!Symbol.dispose) {
  // @ts-expect-error
  Symbol.dispose = Symbol.for('Symbol.dispose');
}

if (!Symbol.asyncDispose) {
  // @ts-expect-error
  Symbol.asyncDispose = Symbol.for('Symbol.asyncDispose');
}
