import { useContext } from "react";
import DonutContext from "../context/donut-context";
import Card from "react-bootstrap/Card";
import doughnut from "../images/big-doughnut.png";

const Donut = () => {
  const { donut} = useContext(DonutContext)
  return (
    <Card style={{ width: "18rem" }} className="mx-auto mt-3">
      <Card.Img variant="top" src={doughnut} alt="doughnut" />
      <Card.Body>
        <Card.Title className="fs-1 text-center">{donut}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Donut;
