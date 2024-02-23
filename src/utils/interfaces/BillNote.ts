export interface BillNote {
  customer: Customer;
  detailBill: DetailBill[];
}

export interface Customer {
  name: string;
  lastName: string;
  address: string;
  mail: string;
  identificationNumber: string;
}

export interface DetailBill {
  idProduct: number;
  quantity: number;
  value: number;
}
