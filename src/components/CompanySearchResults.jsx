import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.company.content.data);

  useEffect(() => {
    dispatch(fetchData(params.company));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
