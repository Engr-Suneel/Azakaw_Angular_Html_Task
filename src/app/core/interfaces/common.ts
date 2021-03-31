export interface ISort {
  empty?: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface ITimestamp {
  date: number
  day: number
  hours: number
  minutes: number
  month: number
  nanos: number
  seconds: number
  time: number
  timezoneOffset: number
  year: number
}

export interface IPageable {
  sort?: ISort;
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  page?: number;
  size?: number
  paged?: boolean;
  unpaged?: boolean;
}

export interface IDateAudit {
  createdDate?: Date,
  createdBy?: number,
  updatedDate?: Date,
  updatedBy?: number
}

export interface IMenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
}

