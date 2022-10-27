import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
    return (
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>4.1 what is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4.2 Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase helps us to develop high-quality apps, grow our user base, and earn more money. Each feature works independently, and they work even better together.

        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>4.3 How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4.4 What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.

        Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default FAQ;