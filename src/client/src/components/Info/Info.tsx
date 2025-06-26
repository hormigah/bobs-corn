const Info = () => {
  return (
  <div className="flex flex-col items-center justify-center w-full">
    <img src="https://i0.wp.com/bobscorn.com/wp-content/uploads/2023/03/Logo.png" alt="Corn" className="mx-auto h-auto" />
    <div className="w-full text-left mb-4">
      <p className="text-center">You can only buy corn once per minute.</p>
      <p className="text-center">Please enter your email to buy corn.</p>
      <p className="text-center">The email is not actually used for anything.</p>
      <p className="text-center">This app is built with React, TypeScript, and Express.</p>
      <p className="text-center">The corn is stored in a PostgreSQL database.</p>
      <p className="text-center">This app is a demo of how to build a full-stack application with React, TypeScript, and Express.</p>
    </div>
  </div>
  );
}

export default Info;