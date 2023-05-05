import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ rec }) => {

    const { name, ingredients, cookingMethod, rating } = rec

    const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

    const notify = () => {
        toast('Added items to favorite')
        setIsFavoriteClicked(true);
    }

    return (
        <div>
            <Card style={{ height: '1050px' }}>
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
                    <Button onClick={notify} variant="dark">Favorite</Button>
                    {isFavoriteClicked && (
                        <div style={{ display: 'none' }}>
                        </div>
                    )}
                    <ToastContainer></ToastContainer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;