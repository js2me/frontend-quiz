import { ModelLoader } from 'mobx-swiss-knife';

export class Models<
  TContext extends AnyObject = AnyObject,
> extends ModelLoader<TContext> {
  lazy<TImport extends { default: Class<any, any> }>(
    loadFn: () => Promise<TImport>,
    ...params: TImport['default'] extends Class<any, infer TParams>
      ? TParams
      : []
  ): Promise<InstanceType<TImport['default']>>;
  lazy<
    TImport extends Record<string, Class<any, any>>,
    TKey extends keyof TImport,
  >(
    key: TKey,
    loadFn: () => Promise<TImport>,
    ...params: TImport[TKey] extends Class<any, infer TParams> ? TParams : []
  ): Promise<InstanceType<TImport[TKey]>>;

  async lazy(...args: any[]): Promise<any> {
    const [key, loadFn, params] =
      typeof args[0] === 'string'
        ? ([args[0], args[1], args.slice(2)] as const)
        : ['default', args[0], args.slice(1)];
    const importPath = loadFn.toString();
    const module = (await this.load(importPath, loadFn))! as Record<
      string,
      any
    >;
    const Model = module[key];
    return new Model(...params);
  }
}

export const models = new Models({ context: {} });
