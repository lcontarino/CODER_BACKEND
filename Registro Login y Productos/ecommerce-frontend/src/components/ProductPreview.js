import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, category, name, pictures }) {
    if (category === "Libros")
        return (
            <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "10rem", margin: "10px" }}>
                <Card style={{ width: "20rem", margin: "10px" }}>
                    <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "230px", objectFit: "fill" }} />
                    <Card.Body>
                        <Card.Title class="card-title">{name}</Card.Title>
                        <Badge bg="warning" text="dark">
                            {category}
                        </Badge>
                    </Card.Body>
                </Card>
            </LinkContainer>
        );
}

export default ProductPreview;