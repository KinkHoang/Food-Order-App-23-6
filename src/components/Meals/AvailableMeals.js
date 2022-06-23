import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bánh mì',
    description: 'Delicious like the whole heaven in your mouth',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Phở',
    description: 'An vietnamese special dish!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Nem cuốn',
    description: 'Fresh vegetable, shrimp and meat',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Trà sữa',
    description: 'Healthy...and delicous.',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
