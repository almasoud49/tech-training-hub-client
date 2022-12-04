import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);
    const {googleProviderLogin,githubProviderLogin,setUser}=useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = ()=>{
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = ()=>{
        githubProviderLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error=>{
            console.error(error)
        })
    }

    useEffect( () => {
        fetch(' https://tech-training-hub-server-almasoud49.vercel.app/course-categories')
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
            <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;