export type PagedListQuery = {
  page?: number;
  pageSize?: number;
};

export interface PagedList<T> {
  items?: T[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
