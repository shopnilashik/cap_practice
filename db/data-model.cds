namespace my.bookshop;
using { Country, managed } from '@sap/cds/common';

entity Books {
  key id : String;
  name  : localized String;
  username : String;
  email  : String;
}

entity Authors {
  key ID : Integer;
  name   : String;
}

entity Orders : managed {
  key ID  : UUID;
  book    : Association to Books;
  country : Country;
  amount  : Integer;
}
