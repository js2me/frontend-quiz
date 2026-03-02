import { getQuickJS } from 'quickjs-emscripten';

export async function safeEval(code: string): Promise<any> {
  const QuickJS = await getQuickJS();
  const vm = QuickJS.newContext();

  const result = vm.evalCode(code);
  if (result.error) {
    console.error('Execution failed:', vm.dump(result.error));
    result.error.dispose();
    vm.dispose();
    throw result.error;
  } else {
    result.value.dispose();
    vm.dispose();
    return result.value.value;
  }
}
