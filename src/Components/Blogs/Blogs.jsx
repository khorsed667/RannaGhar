import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = ({ blg }) => {

    const { title, author, date, content, img } = blg

    return (
        <div className='p-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Card.Text>
                        <div>
                            <p>{author}</p>
                            <p>{date}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;