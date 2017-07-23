import { StorageService } from './storage.service';

export const StorageModule = angular.module('app.commons.storage', []);

StorageModule
  .service('storageService', StorageService)
;
