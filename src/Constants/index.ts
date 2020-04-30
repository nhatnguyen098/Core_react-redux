import ProductImg from "../assets/single_product_1.png";
import ProductImg2 from "../assets/single_product_2.png";
import ProductImg3 from "../assets/single_product_3.png";

export const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        children: []
    },
    {
        id: 2,
        title: "About",
        children: []
    },
    {
        id: 3,
        title: "Product",
        children: [
            {
                childId: 31,
                childTitle: 'Product List'
            },
            {
                childId: 32,
                childTitle: 'Product Detail'
            }
        ]
    },
    {
        id: 4,
        title: "Pages",
        children: [
            {
                childId: 41,
                childTitle: 'Login page'
            },
            {
                childId: 42,
                childTitle: 'Sign up page'
            },
            {
                childId: 43,
                childTitle: 'Cart page'
            }
        ]
    },
    {
        id: 5,
        title: "Blog",
        children: [
            {
                childId: 51,
                childTitle: 'Blog'
            },
            {
                childId: 52,
                childTitle: 'Single blog'
            }
        ]
    },
    {
        id: 6,
        title: "Contact",
        children: []
    },
];

export const ProductArr = [
    {
        urlProImg: ProductImg,
        content: "Printed memory foam brief modern throw pillow case 1",
        price: 10,
      },
      {
        urlProImg: ProductImg2,
        content: "Printed memory foam brief modern throw pillow case 2 ",
        price: 50,
      },
      {
        urlProImg: ProductImg3,
        content: "Printed memory foam brief modern throw pillow case 3",
        price: 30,
      },
      {
        urlProImg: ProductImg,
        content: "Printed memory foam brief modern throw pillow case 4",
        price: 10,
      },
      {
        urlProImg: ProductImg2,
        content: "Printed memory foam brief modern throw pillow case 5",
        price: 50,
      },
      {
        urlProImg: ProductImg3,
        content: "Printed memory foam brief modern throw pillow case 6",
        price: 30,
      },
      {
        urlProImg: ProductImg,
        content: "Printed memory foam brief modern throw pillow case 7",
        price: 10,
      },
      {
        urlProImg: ProductImg2,
        content: "Printed memory foam brief modern throw pillow case 8",
        price: 50,
      },
      {
        urlProImg: ProductImg3,
        content: "Printed memory foam brief modern throw pillow case 9",
        price: 30,
      },
]
