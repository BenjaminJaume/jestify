/* Dependencies */
import React from 'react'

/* Components */
import Paragraph from './Paragraph'

const List = ({ items }) => {
    if (items.length === 0) {
        return <Paragraph>This list is empty</Paragraph>
    }

    return (
        <ul>
            {items.map(item => (
                <li key={item.id} className='item'>
                    {item.body}
                </li>
            ))}
        </ul>
    )
}

export default List