import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar,FaEye } from "react-icons/fa";

const CourseSummaryCard = ({course}) => {
    const{id,instructor, duration, rating , title, details, image_url,course_fee,student_review} = course;
    console.log(course);
    return (
<Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <Image
            roundedCircle
            className='me-2'
            src={instructor?.img}
            style = {{height:'60px'}}
            ></Image>
            <div>
                <p className='mb-0'>{instructor?.name}</p>
                <p>{instructor?.published_date}</p>
            </div>
        </div>
        <div>
            <FaRegBookmark className='me-2'></FaRegBookmark>
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
      <Card.Footer className="d-flex justify-content-between">
        <div>
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye className='me-2'></FaEye>
            <span>{student_review}</span>
        </div>
        </Card.Footer>
    </Card>
    );
};

export default CourseSummaryCard;

