import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  TodoItem: { },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
