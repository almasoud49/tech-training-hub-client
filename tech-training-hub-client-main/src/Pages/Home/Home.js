import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            
            {
                allCourse.map(course => <CourseSummaryCard
                key={course.id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;