import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseCategory = useLoaderData();
    useTitle('Category');
    return (
        <div>

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