import { ViewModelStoreBase, viewModelsConfig } from 'mobx-view-model';

viewModelsConfig.observable.viewModels.useDecorators = false;
viewModelsConfig.observable.viewModelStores.useDecorators = false;

export const vmStore = new ViewModelStoreBase();
