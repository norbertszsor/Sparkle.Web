import { PagedListQuery } from 'src/shared/module/paged-list.interface';

export interface GetCompanyQuery extends Object {}

export interface GetComparisonQuery extends Object, GetPredictionQuery {}

export interface GetMeterListQuery extends PagedListQuery, Object {
  companyId?: string;
}

export interface GetPredictionQuery extends Object {
  MeterId: string;
  Hours: number;
}
