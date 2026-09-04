export type MenuItem = {
  name: string;
  price: number;
  note?: string;
  favorite?: boolean;
};
export type MenuCategory = {
  id: string;
  title: string;
  spanish: string;
  intro: string;
  items: MenuItem[];
};

// Official website menu, checked September 4, 2026. Keep ordering-platform prices separate.
export const restaurantMenu: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    spanish: 'Buenos días',
    intro: 'Slow mornings. Full plates. Something worth waking up for.',
    items: [
      {
        name: 'Chilaquiles Classic',
        price: 17,
        note: 'Red or green salsa, eggs, Cotija, crema & beans.',
        favorite: true,
      },
      {
        name: 'Chilaquiles Deluxe',
        price: 21,
        note: 'The classic, with your choice of meat.',
        favorite: true,
      },
      {
        name: 'Mom’s Special',
        price: 16,
        note: 'Eggs, chorizo, tortilla chips, tomato, onion & serrano.',
        favorite: true,
      },
      { name: 'Huevos Rancheros', price: 16 },
      { name: 'Apache Omelette', price: 20 },
      { name: 'El Diablito Omelette', price: 18 },
      { name: 'Chile Verde Breakfast', price: 18 },
      { name: 'Chicharron Breakfast', price: 18 },
      { name: 'French Toast', price: 18 },
      { name: 'Mañanitas Pancakes Short Stack', price: 15 },
      { name: 'Catrin Omelette', price: 16 },
      { name: 'Chorizo and Eggs', price: 14 },
      { name: 'Ham and Eggs', price: 14 },
      { name: 'Breakfast Burrito', price: 14 },
    ],
  },
  {
    id: 'lunch',
    title: 'Lunch',
    spanish: 'Buen provecho',
    intro: 'A lunch break with a little more sabor.',
    items: [
      {
        name: 'Mañanitas Bowl',
        price: 14,
        note: 'Rice, beans, your choice of meat, pico & avocado.',
        favorite: true,
      },
      {
        name: 'Chile Rellenos',
        price: 18,
        note: 'Queso fresco-filled poblano pepper.',
        favorite: true,
      },
      { name: 'Chile Verde', price: 18 },
      { name: 'Flautas', price: 18 },
      { name: 'Cheese Enchilada Combo', price: 15 },
      { name: 'Cheese Enchiladas', price: 15 },
      { name: 'Meat Enchiladas', price: 16 },
      { name: 'Fish Taco Beer Battered', price: 8 },
      { name: 'Tortas', price: 13.75 },
      { name: 'Sopes', price: 19 },
      { name: 'Torta Ahogada', price: 14 },
      { name: 'Chicharron', price: 16 },
      { name: 'Nachos', price: 15 },
      { name: 'Shrimp Taco Beer Battered', price: 8 },
      { name: 'Street Tacos', price: 4 },
      { name: 'Keto Bowls', price: 14 },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    spanish: 'Un traguito',
    intro: 'A fresh sip, a warm cup, a reason to stay a little longer.',
    items: [
      {
        name: 'Café de Olla',
        price: 5,
        note: 'A warm cup of traditional spiced coffee.',
        favorite: true,
      },
      {
        name: 'Horchata',
        price: 5,
        note: 'The cool, creamy cinnamon favorite.',
      },
      { name: 'Jamaica', price: 5, note: 'Bright hibiscus agua fresca.' },
      { name: 'Cucumber Lime', price: 6 },
      { name: 'Orange Juice', price: 4.75 },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    spanish: 'Para compartir',
    intro: 'Because there is always room for a little more.',
    items: [
      { name: 'Chips and Salsa', price: 5 },
      { name: 'Guacamole', price: 5 },
      { name: 'Rice and Beans', price: 5 },
      { name: 'Eggs', price: 4 },
    ],
  },
];
