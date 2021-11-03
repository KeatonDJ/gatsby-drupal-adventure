import React from 'react';
import { graphql } from 'gatsby';

const Textiles = ({ data }) => {

    const textile = data.nodeTextile;

    return (
        <div>
            <h1>{textile.title}</h1>
            {textile.field_textile_type}
        </div>
    );
};

export const query = graphql`
    query($TextileId: String!) {
        nodeTextile(id: {eq: $TextileId}) {
            id
            title
            field_textile_type
        }
    }
`;

export default Textiles;