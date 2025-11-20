import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card(props) {
  return (
    <div className="card">
      {" "}
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          width: "100%",
          height: "60%",
          borderRadius: "10px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>{" "}
      <div className="title-rate">
        {" "}
        <h1>{props.title}</h1>{" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faStar} size="sm" color="gold" /> {props.rate}{" "}
        </span>{" "}
      </div>{" "}
      <p>{props.description}</p>{" "}
      <h4>
        {" "}
        {props.price}$/<span>night</span>{" "}
      </h4>{" "}
    </div>
  );
}
