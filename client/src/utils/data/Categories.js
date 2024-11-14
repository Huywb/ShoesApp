import jeans from '../../assets/images/jeans.jpg'
import tshirt from '../../assets/images/tshirts.jpg'
import shoes from '../../assets/images/shoes.jpg'
import glasses from '../../assets/images/glasses.png'
import jackets from '../../assets/images/jackets.jpg'
import suits from '../../assets/images/suits.jpg'
import Product from '../../assets/product.svg'
import Create from '../../assets/plus.svg'
import Analytics from '../../assets/chart.svg'

export const categories = [
	{ href: "jeans", name: "Jeans", imageUrl: jeans },
	{ href: "t-shirts", name: "T-shirts", imageUrl: tshirt },
	{ href: "shoes", name: "Shoes", imageUrl: shoes },
	{ href: "glasses", name: "Glasses", imageUrl: glasses },
	{ href: "jackets", name: "Jackets", imageUrl: jackets },
	{ href: "suits", name: "Suits", imageUrl: suits },
];
export const menuAdmin = [
	{
		name:'Create Product',
		image : Create,
		url : 'Create-product'
	},{
		name:'Products',
		image : Product,
		url : 'Products'
	},{
		name:'Ananlytics',
		image : Analytics,
		url : 'Analytics'
	},

]



