import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const CourseSummaryCard = ({course}) => {
    const{id,instructor, duration, title, details, image_url,course_fee} = course;
    console.log(course);
    return (
<Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <Image
            roundedCircle
            className='me-2'
            src={instructor.img}
            style = {{height:'60px'}}
            ></Image>
            <div>
                <p>{instructor.name}</p>
                <p>{instructor.published_date}</p>
            </div>
        </div>
        <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
        </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {
         details.length > 100 ?
        <>{details.slice(0,100) + '...'} <Link to={`/course/${id}`}>Read More</Link> </>
        :
        details
        }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default CourseSummaryCard;