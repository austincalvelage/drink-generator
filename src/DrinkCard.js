const DrinkCard = (props) => {
  return (
  <div className="bg-white/90 w-1/3 min-h-full flex flex-col items-center rounded-3xl">
    <h1 className="text-lg my-6">{props.drinkName}</h1>
    <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" alt={props.drinkName} className="w-1/2 rounded-full mb-6"/>
    <h3 className="">Ingredients</h3>
    <ul className="mb-6">
      <li>{props.liquor}</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </div>
  );
}
DrinkCard.defaultProps={drinkName: 'Old Fashion'};

export default DrinkCard;