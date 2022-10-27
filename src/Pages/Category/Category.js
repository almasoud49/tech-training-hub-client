import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h2>This is category: {courseCategory.length}</h2>
            {
                courseCategory.map(course => <CourseSummaryCard
                key={course.id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;