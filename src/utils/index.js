export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Containers",
    path: "/product/listing/all-products",
  },
  {
    id: "listingDry",
    label: "Dry",
    path: "/product/listing/dry",
  },
  {
    id: "listingReefer",
    label: "Reefer",
    path: "/product/listing/reefer",
  },
  {
    id: "listingOpenTop",
    label: "Open Top",
    path: "/product/listing/openTop",
  },
  {
    id: "listingFlatRack",
    label: "Flat Rack",
    path: "/product/listing/flatRack",
  },
  {
    id: "listingIsoTank",
    label: "Iso Tank",
    path: "/product/listing/isoTank",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Containers",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewContainer",
    label: "Add New Container",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "dry",
        label: "Dry",
      },
      {
        id: "reefer",
        label: "Reefer",
      },
      {
        id: "openTop",
        label: "Open Top",
      },
      {
        id: "flatRack",
        label: "Flat Rack",
      },
      {
        id: "isoTank",
        label: "Iso Tank",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "20`Foot 40`Foot",
  },
  {
    id: "m",
    label: "20`Foot 40`Foot 40`Foot High Cube",
  },
  {
    id: "kl",
    label: "9.5Kiloliter 25Kiloliter",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCUYZ4duOT2wGRTILyl-hKtioyiul4fGIg",
  authDomain: "marina-system.firebaseapp.com",
  projectId: "marina-system",
  storageBucket: "marina-system.appspot.com",
  messagingSenderId: "212465553312",
  appId: "1:212465553312:web:049143581bec091a0b5ec5",
  measurementId: "G-Z69RGQVHPH",
};

export const firebaseStorageURL = 'gs://marina-system.appspot.com'
