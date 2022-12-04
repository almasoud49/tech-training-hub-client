import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
import useTitle from '../../Hooks/useTitle';


const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    useTitle('News Details');
    const {title, details, image_url, category_id
    } = course;
    return (
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{
        title
        
        }

        {
          <>
        <Pdf targetRef={ref} filename="Course-Details.pdf">
        {({ toPdf }) => <button variant="success" onClick={toPdf}>Course Details</button>}
      </Pdf>
      <div className='course' ref={ref}>
        {details}
      </div>
          </>
        }
        </Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Link to={`/category/${category_id}`}>

        <Button variant="primary">Get premium access</Button>

        </Link>
      </Card.Body>
    </Card>
    );
};

export default Course;

