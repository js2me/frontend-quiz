import { viewModelsConfig, ViewModelStoreBase } from 'mobx-view-model';

viewModelsConfig.comparePayload = false;
viewModelsConfig.payloadComputed = 'struct';
viewModelsConfig.payloadObservable = 'ref';

export const vmStore = new ViewModelStoreBase();
