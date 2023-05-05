import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Chef = ({ c }) => {
    console.log(c)

    const { chefName, id, yearsOfExperience, numRecipes, likes, picture } = c

    console.log(chefName);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height: '140px'}} src={picture} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <div className="chef-info d-flex justify-content-between align-items-center">
                        <div className="exp-area">
                            <p>{yearsOfExperience} years experience</p>
                            <p>{numRecipes} Recipies</p>
                        </div>
                        <div className="linkes">
                            <p>{likes}k likes</p>
                        </div>
                    </div>
                    <Button variant="dark">View Chef</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;