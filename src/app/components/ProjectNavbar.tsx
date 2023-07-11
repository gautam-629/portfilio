    
import React, { FunctionComponent } from 'react'
import { Category } from '@/types';

export const NavItem: FunctionComponent<{
    value: Category | 'all';
    handlerFilterCategory: Function;
}> = ({ value, handlerFilterCategory }) => {
    return (
        <>
        <li className="capitalize cursor-pointer hover:text-blue" onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
        </>
    );
}

const ProjectNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
}> = (props) => {
    return (
        <>
        <div className=' text-text_color flex px-3 py-2 space-x-3 list-none'>
            <NavItem value="all" {...props} />
        </div>
        </>
    )
}

export default ProjectNavbar