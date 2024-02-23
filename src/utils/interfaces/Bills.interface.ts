export interface Bills {
  idBill: number;
  customer: Customer;
  detailBill: DetailBill[];
  subTotal: number;
  total: number;
  iva: number;
}

export interface Customer {
  idCustomer: number;
  name: string;
  lastName: string;
  address: string;
  mail: string;
  identificationNumber: string;
}

export interface DetailBill {
  idDetailBill: number;
  idBill: number;
  idProduct: number;
  quantity: number;
  value: number;
}
