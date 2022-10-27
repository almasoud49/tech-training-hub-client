import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h4>All Courses: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
            <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;