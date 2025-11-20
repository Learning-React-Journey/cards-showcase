import { data } from "./Data";
import Card from "./Components/Card";
export default function App() {
  const showData = data.map((item, i) => (
    <Card
      key={i + 1}
      img={item.img}
      title={item.title}
      description={item.description}
      rate={item.rate}
      price={item.price}
    />
  ));
  return <div className="container cards">{showData}</div>;
}
