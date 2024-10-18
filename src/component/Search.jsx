import React from 'react';
import { Form } from 'react-bootstrap';

const Search = () => {
  return (
    <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.9)" }}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search..."
          style={{ width: "100%" }}
        />
      </Form>
    </div>
  );
};

export default Search;