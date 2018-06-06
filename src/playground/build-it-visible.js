let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hid details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can done.</p>
        </div>
      )}
    </div>
  );

  const appRoot = document.getElementById('app');

  ReactDOM.render(jsx, appRoot);
};

render();
