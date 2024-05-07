import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removePreferitiAction } from "../redux/actions";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.preferiti.content);
  const dispatch = useDispatch();
  return (
    <div>
      {preferiti.map((preferito, i) => {
        return (
          <Row
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
          >
            <Col xs={3}>
              <Link to={`/${preferito.company_name}`}>
                {preferito.company_name}
              </Link>
            </Col>
            <Col xs={7}>
              <a href={preferito.url} target="_blank" rel="noreferrer">
                {preferito.title}
              </a>
            </Col>
            <Col xs={2}>
              <Button
                type="button"
                onClick={() => {
                  dispatch(removePreferitiAction(i));
                }}
              >
                Elimina
              </Button>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Preferiti;
