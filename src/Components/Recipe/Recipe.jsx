import React from 'react';
import { Card } from 'react-bootstrap';

const Recipe = ({ rec }) => {

    const { name, ingredients, cookingMethod, rating } = rec

    return (
        <div>
            <Card style={{height:'950px'}}>
                <Card.Header className='fw-bolder'>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Ingredients:

                        {
                            ingredients.map(ing => <ol>{ing}</ol>)
                        }
                    </Card.Title>
                    <Card.Text>
                        <p>Cooking Method: {cookingMethod}</p>
                    </Card.Text>
                    <Card.Text>
                        <p className='fw-semibold'>{rating} Rating</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;