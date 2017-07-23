import { StorageModule } from './storage/storage.module';

export const CommonsModule = angular.module('app.commons', [
  StorageModule.name,
]);
