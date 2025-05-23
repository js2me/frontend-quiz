import { observable, runInAction } from 'mobx';

interface ModelLoadState {
  context: any;
  property: any;
  data?: any;
  fn: () => Promise<any>;
}

export class ModelLoader {
  private modelsMap = observable.map<keyof any, ModelLoadState>();

  init<
    TContext extends Record<string, any>,
    TProperty extends keyof TContext,
    TModel,
  >({
    context,
    property,
    fn,
  }: {
    context: TContext;
    property: TProperty;
    fn: () => Promise<TModel>;
  }): Maybe<TModel> {
    runInAction(() => {
      this.modelsMap.set(property, {
        context,
        property,
        fn,
      });
    });

    fn().then((data) => {
      runInAction(() => {
        this.modelsMap.set(property, {
          context,
          property,
          fn,
          data,
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        context[property] = data;
      });
    });

    return null;
  }

  checkLoading<
    TContext extends Record<string, any>,
    TProperty extends keyof TContext,
  >(context: TContext, property: TProperty): boolean {
    return this.modelsMap.get(property)?.data == null;
  }
}
