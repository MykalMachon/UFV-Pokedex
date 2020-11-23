const About = () => {
  return (
    <>
      <h1 className="mb-2 text-xl text-gray-900">About The App</h1>
      <p className="mb-2 text-gray-500">
        This app was made for project portion of COMP 390. While the main focus
        of the project was to create and manage a web server we also wanted to
        create a memorable and fun application to host on that web server.
      </p>
      <p className="mb-4 text-gray-500">
        With that in mind, we made this <b>The UFV Pokedex App</b>. This app
        shows you info about a random pokemon on load, and allows you to search
        for other ones as well!
      </p>
      <p className="mb-2 text-gray-700">- Hieu Le</p>
      <p className="mb-2 text-gray-700">- Mykal Machon</p>
    </>
  );
};

export default About;
