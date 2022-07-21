<!-- Asynchronous javascript and event loop in JS
=> javascript is synchronous single threaded language
=> call stakes are present in javascript engine 

evet loop is the secrete behind JS asychronous programming in JS executes all operations on a single threaded, but using a few smart data structures, it gives the illution of multithreading. Let's take a look at what happens on the back-end

=> The Call Stack is responsible for track of all the operations in line to be executed Whenever a function is finished it is popped from the stack

<The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution>

Whenever an async function called. it is sent to a browser API these are API built into the browser. Based on commends receved from the callstack, the api starts its own single-threaded

what is Node JS ?

Node js is an open source server environment
java script runtime environment and library for running web applications outside the client's browser
Node.JS is a JavaScript runtime environment
It is used for creating servier-side applications
Node.js is perfect for data-intensive applications as it uses an asynchronous event driven model

How node js works?

Node.js is event loop single.threaded language. It can handle concurrent requests with a single thread without locking it for one request. Non blocking I/O Nonblocking I/O means working with multiple requests without blocking the thread for a single thread

schema less  -->

//


